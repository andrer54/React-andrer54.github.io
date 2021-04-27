import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import blog1 from '../img/blogs/blog1.svg';

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
                    <ContactItem icon={location} text1={'linkedin.com/andre.costa'} text2={''} title={'Linkedin'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
