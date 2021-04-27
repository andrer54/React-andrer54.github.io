import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import projetos from '../Components/allprojetos';
import { useState } from 'react';

const allCategories = ['All', ...new Set(projetos.map(item => item.category))];

function ProjetosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(projetos);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(projetos)
            return;
        }
        const filteredData  = projetos.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projetos'} span={'pessoais'} />
            </div>
            <div className="portifolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ProjetosPage;
