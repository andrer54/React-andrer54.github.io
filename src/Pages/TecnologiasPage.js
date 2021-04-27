import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

import blog1 from '../img/blogs/blog4.svg';

function TecnologiasPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'TECNOLOGIAS'} span={'Tecnologias favoritas'} />
            <hr/>
            <br />
            <img src={blog1} width="60%" height="60%" />



            <Tittle title={'Backend'} span={'Linguagens'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'68%'} width={'68%'} />
                <SkillsSection skill={'PHP'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Node.js'} progress={'35%'} width={'35%'} />
                <SkillsSection skill={'C#'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'C'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'Python'} progress={'10%'} width={'10%'} />
            </div>

            <Tittle title={'FrontEnd'} span={'Interfaces'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'BootStrap'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Sass'} progress={'35%'} width={'35%'} />
            </div>



            <Tittle title={'Banco de Dados'} span={'Dados'} />
            <div className="skillsContainer">
                <SkillsSection skill={'PostGreSQL'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'MySQL'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'15%'} width={'15%'} />
                <SkillsSection skill={'SQL Server'} progress={'40%'} width={'40%'} />
            </div>

            <Tittle title={'Frameworks'} span={'Dados'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Spring - Java'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Asp.net'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'composer - php'} progress={'20%'} width={'20%'} />
            </div>

            <Tittle title={'Ferramentas Globais'} span={'OS'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Git'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Protocolo HTTP'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'API rest'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'Computação em nuvem'} progress={'50%'} width={'50%'} />
            </div>


            <Tittle title={'Sistemas Operacionais'} span={'OS'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Linux'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Windows'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'iOS'} progress={'39%'} width={'39%'} />
                <SkillsSection skill={'Android'} progress={'66%'} width={'66%'} />
            </div>




        </div>
    )
}

export default TecnologiasPage;
