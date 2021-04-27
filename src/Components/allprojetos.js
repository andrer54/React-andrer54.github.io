
import port1 from '../img/portImages/port1.jpg';
import port2 from '../img/portImages/port2.jpg';
import port3 from '../img/portImages/port3.jpg';
import port4 from '../img/portImages/port4.jpg';
import port5 from '../img/portImages/port5.jpg'
import port6 from '../img/portImages/port6.jpg';
import maya1 from '../img/portImages/maya-1.jpg';
import captura1 from '../img/portImages/capturas1.png';
import locadoraImg from '../img/portImages/locadoraOnline.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Java',
        link1: 'https://github.com/andrer54/appfinancas',
        link2: '',
        icon1: 'GitHub',
        icon2: 'Artigo',
        image: port6,
        title: 'JAVA - Gerenciador Finanças Pessoais',
        descricao: 'Web app feito com JAVA spring e postgresql'
    },
    {
        id: 2,
        category: 'PHP',
        link1: 'https://github.com/andrer54/php-agenda-de-contatos',
        link2: 'https://andreprogramador.000webhostapp.com/apps/agenda/logar.htm',
        icon1: 'GitHub',
        icon2: 'Aplicativo',
        image: captura1,
        title: 'PHP - Agenda telefonica com login',
        descricao: 'Web app em php mysql'
    },
    {
        id: 3,
        category: 'C#',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: locadoraImg,
        title: 'C# - Locadora Online',
        descricao: 'AspNet arquitetura MVC, deploy no AZURE, sql server'
        
    },
    {
        id: 4,
        category: 'C#',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'C# - Analise de Investimento',
        descricao: 'AspNet arquitetura MVC, deploy no AZURE, SQL Server'

        

    },
    
]

export default portfolios;