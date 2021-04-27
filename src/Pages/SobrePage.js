import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function SobrePage() {
    return (
        <div className="AboutPage">
            <Tittle title={'Sobre'} span={'Um pouco sobre mim'} />
            <ImageSection />



        </div>
    )
}

export default SobrePage;
