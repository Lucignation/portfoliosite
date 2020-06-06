import React from 'react';
import Gerald from '../../public/Olumide.png';
import './about.css';

const About = props =>{
    return(
        <div>
            <div className="geraldMain">
                <div className = "Gerald">
                    <img src={Gerald} alt="" />
                </div>
                <div className="social">
                        <a href="https://twitter.com/lucignation_olu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/Lucignation" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/geraldolumide/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://dribbble.com/lucignation" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
                    </div>
            </div>
            <div className="bio">


            <div>
                    <h4>August 2019</h4>
                    <div className="bioDotted"></div>
                    <h3>HNG Internship 6.0</h3>
                    <p>
                        2019 is really an interesting year for me because I was 
                        able to take part in different dev. programmes. HGN Internship 
                        is known for equipping it's students in different areas to be world class developers.
                    </p>
            </div>

            <div>
                    <h4>August 2019</h4>
                    <div className="bioDotted"></div>
                    <h3>Facebook Developer Circles</h3>
                    <p>
                        I was given the opportunity to be mentored by great developers in Nigeria 
                        during my meetups at various locations.
                    </p>
            </div>

            
            <div>
                    <h4>June 2019</h4>
                    <div className="bioDotted"></div>
                    <h3>Andela Learning Community (ALC 4.0)</h3>
                    <p>
                        I got a scholarship from Andela to be part of the developers that will stand
                        the chance to be certified as Google Dev. Expert (GDE). Different stages were involved
                        and everyone had to roll up their sleeves and do the dirty coding.
                    </p>
            </div>
            <div>
                    <h4>May 2018 - Present</h4>
                    <div className="bioDotted"></div>
                    <h3>Bengraph - Full Stack</h3>
                    <p>
                        Bengraph is a Tech Company in South Africa. We are professional software engineers that build
                        badass web applications.I do both frontend and backend. 
                    </p>
            </div>
            <div>
                    <h4>October 2017 - August 2018</h4>
                    <div className="bioDotted"></div>
                    <h3>AgroAfrica - frontEnd Developer</h3>
                    <p>AgroAfrica is a sister company to AgroNigeria. After multiple successes with the online selling of the magazine,
                        We launched AgroAfrica later that year. I implemented the online subscription and purchase
                        our the magazine online. The design layout of the magazine was inspired by an international
                        online print.
                    </p>
                </div>
                <div>
                    <h4>November 2016 - August 2018</h4>
                    <div className="bioDotted"></div>
                    <h3>AgroNigeria - frontEnd Developer</h3>
                    <p>AgroNigeria is a print and online magazine on Agriculture. I was responsible for
                        both front-end and back-end of their website. During my time there, we were able to launch
                        the online version for readers purchase and read on the "GO". I was also responsible for the
                        security of their database.
                    </p>
                </div>
                <div>
                    <h4>2014</h4>
                    <div className="bioDotted"></div>
                    <h3>HTML, CSS, JAVA</h3>
                    <p>
                        I taught myself to code in HTML, CSS in just one week.
                        I was super proud of myself but when I moved to JavaScript,
                        
                    </p>
                </div>
                <div>
                    <h4>2006 - (Through High School)</h4>
                    <div className="bioDotted"></div>
                    <h3>QBasic</h3>
                    <p>
                        QBasic was the very first programming language I was introduced to.
                        I felt in love with programming. I used a function I was thought
                        to solve different Physics and Chemistry assignments I have.
                        And boy, it works every time. I always buy new floppy disk to School
                        to save my codes. God knows where they are right now.
                    </p>
                </div>
                <a className="contactBtn" href="mailto:lucignation@gmail.com?Subject='Hello,%20Gerald.%20We%20would%20like%20to%20request%20for%20your%20CV'">Request for my CV</a>
            </div>
        </div>
    );
}

export default About;