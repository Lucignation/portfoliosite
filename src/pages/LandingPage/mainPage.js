import React, { Component } from 'react';
import Main from '../../public/undraw_suburbs_8b83.svg';

import './mainPage.css';

class MainPage extends Component{
    state={
        user: '',

    }
    render(){
        return(
            <div className="main">
                <img src={Main} alt="" />
                <div className="BG"></div>
                <div className="user">
                    <h1>Gerald Olumide 
                    <div className="slide slides">
                    <span>Develops</span>
                    <span>Designs</span>
                    <span>Builds</span>
                    <span>Mentors</span>
                    </div></h1>
                </div>

                <div className="Languagues"><h4>Languages I Speak: NodeJS, ReactJS, Angular, Mongoose, SASS, GraphQL, Javascript, Bootstrap</h4></div>

                <div className="tooling">
                    <h3>Languages I Speak 
                    <div className="tool tools">
                    <span>NodeJS</span>
                    <span>ReactJS</span>
                    <span>Angular</span>
                    <span>Mongoose</span>
                    <span>SASS</span>
                    <span>Javascript</span>
                    <span>Bootstrap</span>
                    <span>GraphQL</span>
                    </div></h3>
                </div>
                
            </div>
        );
    }
}

export default MainPage;