import React from 'react';
import about from '../img/andre_a.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Dev.<span> André Costa</span></h4>
                <p className="about-text">
                    
                    
                    Quando vim ao mundo, não hávia internet!<br />

                    Hoje ao observar como a internet transformou nossas vidas, <br />
                    e o que ela ainda pode fazer pela nossa sociedade... <br />
                    
                    Sou apaixonado por internet, <br />
                    e entusiasta quanto o assunto é tecnologia, <br />
                    
                    Quanto mais eu programo, mais eu gosto de programar, <br />


                    Tenho estudado continuamente afim de me estabelecer neste ramo! <br />
        
                    Tenho muito interesse em desenvolvimento backend - frontend e mobile <br />
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                   
                    </div>
                    <div className="right-section">
                        <p>: André Costa</p>
                        <p>: 38</p>
                        <p>: Brasileiro</p>
                        <p>: Portugues, English, Español</p>
                        <p>: Rio de Janeiro - RJ - Brasil</p>
                       
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default ImageSection;
