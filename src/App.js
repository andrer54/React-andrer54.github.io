import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import SobrePage from './Pages/SobrePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ProjetosPage from './Pages/ProjetosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import CurriculoPage from './Pages/CurriculoPage';
import TecnologiasPage from './Pages/TecnologiasPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/sobre" exact>
                <SobrePage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfoliosPage />
              </Route>
              <Route path="/projetos" exact>
                <ProjetosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
              <Route path="/curriculo" exact>
                <CurriculoPage />
              </Route>
              <Route path="/tecnologias" exact>
                <TecnologiasPage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
