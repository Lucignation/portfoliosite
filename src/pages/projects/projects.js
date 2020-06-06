import React, { Component } from 'react';

import './projects.css';

class Projects extends Component{
    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="parent">
                        <div className="child bg_one">
                            <a href="https://www.agroafricamagazine.com" target="_blank" rel="noopener noreferrer">AgroAfrica</a>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="child bg_two">
                            <a href="https://alvinehomes.com.ng" target="_blank" rel="noopener noreferrer">Alvine Homes</a>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="child bg_three">
                            <a href="https://letstalkcyberbullying.com" rel="noopener noreferrer"  target="_blank">Let's Talk Cyberbully</a>
                        </div>
                    </div>

                    <div className="parent">
                        <div className="child bg_four">
                            <a href="https://budgetcalculation.netlify.com" rel="noopener noreferrer" target="_blank">Budget Calculator</a>
                        </div>
                    </div>

                    <div className="parent">
                        <div className="child bg_five">
                            <a href="https://lagosfriesng.com" rel="noopener noreferrer"  target="_blank">Lagos Fries</a>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="child bg_six">
                            <a href="https://allbeautyg.com" rel="noopener noreferrer" target="_blank">Allbeauty G</a>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Projects;