import React, { Component } from 'react';


class Post extends Component{

    state = {
        title: '',
        imageUrl: '',
        date: '',
        content: '',
        author: ''
    };

    render(){
        return(
            <div className="blog">
                <form>
                    <input name={this.props.title} id="title"placeholder="Title" />
                    <input name={this.props.imageUrl} id="imageUrl" />
                    <textarea name={this.props.content} id="content"></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        );
    }
};

export default Post;