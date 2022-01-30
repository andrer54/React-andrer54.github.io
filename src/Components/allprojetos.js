
import port1 from '../img/portImages/port1.jpg';
import port2 from '../img/portImages/port2.jpg';
import port7 from '../img/portImages/analisedeinvest.jpg';
import port3 from '../img/portImages/port3.jpg';
import port4 from '../img/portImages/port4.jpg';
import port5 from '../img/portImages/port5.jpg'
import port6 from '../img/portImages/port6.jpg';
import maya1 from '../img/portImages/maya-1.jpg';
import captura1 from '../img/portImages/capturas1.png';
import locadoraImg from '../img/portImages/locadoraOnline.jpg';

const portfolios = [
    {
        id: 5,
        category: 'Java',
        link1: 'https://appdeeventos.herokuapp.com/',
        link2: 'https://github.com/andrer54/eventos-app',
        icon1: 'Acessar',
        icon2: 'GitHub',
        image: port2,
        title: 'JAVA - WebApp de eventos',
        descricao: 'Spring arquitetura MVC, front thymeleaf, deploy em heroku, PostgreSQL'

    },

    {
        id: 2,
        category: 'PHP',
        link1: 'https://github.com/andrer54/php-agenda-de-contatos',
        link2: 'https://andreprogramador.000webhostapp.com/apps/agenda/logar.htm',
        icon1: 'GitHub',
        icon2: 'Aplicativo',
        image: captura1,
        title: 'PHP - Agenda com login',
        descricao: 'PHP, MySQL e Materialize css'
    },
    {
        id: 3,
        category: 'C#',
        link1: 'https://andreprogramador.000webhostapp.com/2019/08/aplicativo-locadora-online',
        link2: 'https://github.com/andrer54/ASPNET-Locadora',
        icon1: 'Artigo',
        icon2: 'GitHub',
        image: locadoraImg,
        title: 'C# - Locadora Online',
        descricao: 'AspNet arquitetura MVC, deploy no AZURE, sql server'
        
    },
    {
        id: 4,
        category: 'C#',
        link1: 'https://github.com/andrer54/AnaliseDeInvestimentoASPNET',
        link2: 'https://andreprogramador.000webhostapp.com/2019/08/novo-aplicativo-publicado-analise-de-investimento',
        icon1: 'GitHub',
        icon2: 'Artigo',
        image: port7,
        title: 'C# - Analise de Investimento',
        descricao: 'AspNet arquitetura MVC, deploy no AZURE, SQL Server'

    },
    {
        id: 1,
        category: 'Java',
        link1: 'https://github.com/andrer54/appfinancas',
        link2: 'https://andreprogramador.000webhostapp.com/2021/08/app-financas-pessoaisj',
        icon1: 'GitHub',
        icon2: 'Artigo',
        image: port6,
        title: 'Finanças Pessoais',
        descricao: 'Web app feito com JAVA spring e postgresql'
    },
    
]

export default portfolios;