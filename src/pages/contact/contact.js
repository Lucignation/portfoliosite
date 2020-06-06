import React from 'react';
import './contact.css';


const Projects = props =>{
        return(
            <div className="contactPg">
                <h1>Want us to work on a project together or just wanna holla?</h1>
                <p className="contactPg__p">Kindly use the button <span aria-label="below" role="img">👇</span> to start a conversation with the humble developer </p>
                <div className="contactBtn">
                <a className="contactBtn__work" href="mailto:lucignation@gmail.com?Subject='Hello,%20Gerald.%20I%20have%20a%20project%20I%20want%20us%20to%20work%20on'">Work Together</a>
                <a className="contactBtn__CV" href="mailto:lucignation@gmail.com?Subject='Hello,%20Gerald.%20We%20would%20like%20to%20request%20for%20your%20CV'">Request for my CV</a>
                <a className="contactBtn__hola" href="mailto:lucignation@gmail.com?Subject='Hello,%20Gerald.%20Just%20want%20to%20say%20hello'">Hola Como Estas?</a>
                </div>
            </div>
        );
}

export default Projects;