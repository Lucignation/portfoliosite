import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import ErrorPage from './components/error/404';
import Contact from './pages/contact/contact';
import MainPage from './pages/LandingPage/mainPage';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import Projects from './pages/projects/projects';

class App extends Component{
  state={
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null
  };

  componentDidMount(){
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if(!token || !expiryDate){
      return;
    }
    if(new Date(expiryDate) <= new Date()){
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({isAuth: true, token: token,userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }

  showMobileNav = isOpen =>{
    this.setState({showMobileNav: isOpen, showBackdrop: isOpen});
  }

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  logoutHandler = () =>{
    this.setState({isAuth: false, token: null});
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  loginHandler = (event, authData) =>{
    event.preventDefault();
    const graphqlQuery = {
      query: `{
        login(email: "${authData.email}", password: "${authData.password}"){
          token
          userId
        }
      }`
    };
    this.setState({authLoading: true});
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.props.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res =>{
        return res.json();
      })
      .then(resData =>{
        console.log(resData);
        if(resData.errors && resData.errors[0].status === 422){
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!!"
          );
        }
        if(resData.errors){
          // console.log(resData.errors);
          throw new Error("User login failed!!!");
        }
        this.setState({
          isAuth:true,
          token: resData.data.login.token,
          authLoading: false,
          userId: resData.data.login.userId
        });
        localStorage.setItem('token', resData.data.login.token);
        localStorage.getItem('userId', resData.data.login.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        this.props.history.replace('/');
      })
      .catch(err => {
        this.setState({
          isAuth:false,
          authLoading: false,
          error: err
        });
      });
  };

  signupHandler = (event, authData) =>{
    event.preventDefault();
    this.setState({ authLoading: true });
    const graphqlQuery = {
      query: `
      mutation{
        createUser(userInput:{email: "${
          authData.signupForm.email.value
        }", name: "${
          authData.signupForm.name.value
        }", password: "${
          authData.signupForm.password.value
        }"}){
          _id
          email
        }
      }
      `
    };
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res =>{
        return res.json();
      })
      .then(resData =>{
        if(resData.errors && resData.errors[0].status === 422){
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!!"
          );
        }
        if(resData.errors){
          console.log(resData.errors);
          throw new Error("User creation failed!!!");
        }
        this.setState({isAuth: false, authLoading: false});
        this.props.history.replace('/');
      })
      .catch(err =>{
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  render(){
    let routes = (
      <Switch>
        <Route 
          path="/"
          exact
          render={props =>(
            <MainPage />
          )}
        />
        <Route 
          path="/projects"
          exact
          render={props =>(
            <Projects/>
          )}
        />
          <Route 
          path="/about"
          exact
          render={props =>(
            <About />
          )}
        />
        <Route 
          path="/contact"
          exact
          render={props =>(
            <Contact />
          )}
        />
          <Route 
          path="*"
          exact
          render={props =>(
            <ErrorPage 
            />
          )}
        />
          
        <Redirect to="/" />
      </Switch>
    );
    return(
      <Fragment>
        <NavigationItems />
        {routes}
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(App);