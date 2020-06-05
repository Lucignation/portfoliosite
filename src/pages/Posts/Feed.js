import React, { Component, Fragment } from 'react';


import Post from '../../components/Feed/Post/User__Post';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import Pagination from '../../components/Paginator/Paginator';

class Feed extends Component{

    state={
        isEditing: false,
        posts: [],
        totalPosts: 0,
        editPost: null,
        status: '',
        postPage: 1,
        postsLoading: true,
        editLoading: false
    };

    componentDidMount(){
        fetch('http:localhost:8080/auth/status', {
            headers:{
                Authorization: 'Bearer '+ this.props.token
            }
        })
            .then(resData =>{
                this.setState({status: resData.status});
            })
            .catch(this.catchError);

        this.loadPosts();
    }

    

    loadPosts = direction =>{
        if(direction){
            this.setState({postsLoading: true, posts: []});
        }
        let page = this.state.postPage;
        if(direction === 'next'){
            page++;
            this.setState({postPage: page});
        }
        if(direction === 'previous'){
            page--;
        }
        const graphqlQuery = {
            query: `
                {
                    posts(page: ${page}) {
                        posts {
                            _id
                            title
                            content
                            creator {
                                name
                            }
                            createdAt
                        }
                        totalPosts
                    }
            }
            ` 
        }
        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers:{
                Authorization: 'Bearer '+ this.props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })
            .then(res =>{
                return res.json();
            })
            .then(resData =>{
                if (resData.errors) {
                    throw new Error('Fetching posts failed!');
                  }
                  this.setState({
                    posts: resData.data.posts.posts.map(post => {
                      return {
                        ...post
                      };
                    }),
                    totalPosts: resData.data.posts.totalPosts,
                    postsLoading: false
                  });
                })
                .catch(this.catchError);
    };

    newPostHandler = () =>{
        this.setState({isEditing: true})
    };

    startEditPostHandler = postId =>{
        this.setState(prevState =>{
            const loadedPost = {...prevState.posts.find(p => p._id === postId)};

            return{
                isEditing: true,
                editPost: loadedPost
            };
        });
    };

    cancelHandler = () =>{
        this.setState({isEditing: false, editPost: null});
    };

    finishEditHandler = postData =>{

        let graphqlQuery = {
            query: `
                mutation {
                    createPost(postInput: {title: "${postData.title}", content: "${postData.content}"}){
                        _id
                        title
                        content
                        creator{
                            name
                        }
                        createdAt
                    }
                }
            `
        };

        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+ this.props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })
            .then(res =>{
                return res.json();
            })
            .then(resData =>{
                if (resData.errors && resData.errors[0].status === 422) {
                    throw new Error(
                      "Validation failed. Make sure the email address isn't used yet!"
                    );
                  }
                  if (resData.errors) {
                    throw new Error('User login failed!');
                  }
                  console.log(resData);
                const post = {
                    _id: resData.data.createPost._id,
                    title: resData.data.createPost.title,
                    content: resData.data.createPost.content,
                    creator: resData.data.createPost.creator,
                    createdAt: resData.data.createPost.createdAt
                };
                console.log(post);
                this.setState(prevState =>{
                    let updatedPosts =[...prevState.posts];
                    if(prevState.editPost){
                        const postIndex = prevState.posts.findIndex(
                            p => p._id === prevState.editPost._id
                        );
                        updatedPosts[postIndex] = post;
                    }else{
                        updatedPosts.pop();
                        updatedPosts.unshift(post);
                    }
                    return{
                        posts: updatedPosts,
                        isEditing: false,
                        editPost: null,
                        editLoading: false
                    };
                });
            })
            .catch(err =>{
                console.log(err);
                this.setState({
                    isEditing: false,
                    editPost: null,
                    editLoading:false,
                    error: err
                });
            });
    }

    render(){
        return(
            <Fragment>
                <ErrorHandler 
                    error={this.state.error}
                    onHandle={this.ErrorHandler}
                />
                <section>
                    {this.state.postsLoading && (
                        <div style={{textAlign: 'center', marginTop: '2rem'}}>
                            <Loader />
                        </div>
                    )}
                    {this.state.posts.length <= 0 && !this.state.postsLoading ? (
                        <p style={{ textAlign: 'center' }}>No posts Found...</p>
                    ): null}

                    <Pagination
                        onPrevious = {this.loadPosts.bind(this, 'previous')}
                        onNext={this.loadPosts.bind(this, 'next')}
                        lastPage={Math.ceil(this.state.totalPosts / 5)}
                        currentPage={this.state.postPage}
                    >
                    {this.state.posts.map(post =>(
                        <Post
                            key = {post._id}
                            id={post._id}
                            author = {post.creator.name}
                            date={new Date(post.createdAt).toLocaleDateString('en-US')}
                            title={post.title}
                            content={post.content}
                            onStartEdit={this.startEditPostHandler.bind(this, post._id)}
                        />
                    ))}
                    </Pagination>
                </section>
            </Fragment>
        );
    }
}

export default Feed;