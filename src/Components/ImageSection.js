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
                    Sou entusiasta quanto o assunto é tecnologia, <br />
                    
                    pelo que ela tem feito e ainda pode fazer pela nossa sociedade!

                    Adoro programar, tenho estudado continuamente afim de me estabelecer neste ramo! <br />
        
                    Tenho muito interesse em desenvolvimento mobile, web, e mais adiante certamente em IA! <br />
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
            <a className="btn" href="curriculo">Veja meu currículo</a>

        </div>
    )
}

export default ImageSection;
