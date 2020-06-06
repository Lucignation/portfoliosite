import React from 'react';
import errorImage from '../../public/undraw_page_not_found_su7k.svg';
// import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

const noPageFound = () =>{
    return(
        <div>
            <img src={errorImage} alt="Page Not Found" />
        </div>
    );
}


export default noPageFound;