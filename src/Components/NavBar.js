import React from 'react'
import avatar from '../img/andre_a.jpg';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sobre" exact activeClassName="active">
                            Sobre
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/curriculo" exact activeClassName="active">
                            Curriculo
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tecnologias" exact activeClassName="active">
                            Tecnologias
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/projetos" exact activeClassName="active">
                            Projetos
                        </NavLink>
                    </li>
                    

                    
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contato
                        </NavLink>
                    </li>


                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                         Blog
                        </NavLink>
                    </li>
                    {/*
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                           [ antigo portifolios ]
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                           [ antigo about ]
                        </NavLink>
                    </li>
                    */
                  }
                </ul>

                <footer className="footer">
                    <p>
                    {document.title = 'André Costa - 2022'} 
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
