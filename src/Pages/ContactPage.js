import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import blog1 from '../img/blogs/blog1.svg';


import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function ContactPage() {
    
    return (
        <div>
            <div className="title">
                <Tittle title={'Contato'} span={'Contato'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    
                <img src={blog1} width="600" height="600" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></img>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+55 (21) 99880-0493'} text2={''} title={'Telefone e WhatsApp'}/>
                    <ContactItem icon={email} text1={'andrer54@gmail.com'} text2={''} title={'Email'}/>
                    
                    <div className="icons">
                        <a href="https://github.com/andrer54" target="_blank" className="icon-holder">
                            <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        </a>
                        <a href="https://www.linkedin.com/in/andrecosta110/" target="_blank" className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
                        </a>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default ContactPage;
