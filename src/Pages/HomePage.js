import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import blog1 from '../img/blogs/blog1.svg';

function HomePage() {
    
    return (
      
        <div className="HomePage">
            
            <header className="hero">
            
                <h1 className="hero-text">
                    André Costa  
                    <span> Desenvolvedor de Sistemas</span>
                </h1>
               
                <div className="about-details">
                <div className="left-section">
                         <img src={blog1}  />
                    </div>
                    <div className="right-section">
                        <p className="">
                      
                        Seja bem vindo(a) a minha home page! <br />
                        Sou estudante de ADS <br />
                        em busca do primeiro emprego como desenvolvedor... <br />
                        Fique a vontade para acessar os links ou entrar em contato :)
                        </p>
                        
                    </div>


                </div>

                <div className="icons">

                    <a href="https://github.com/andrer54" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/andrecosta110/" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
                    </a>

                </div>
            </header>
            
        </div>
    
    )
}

export default HomePage;
