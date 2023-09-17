import reddit from '../../assets/pj4.jpg'
import tgdd from '../../assets/pj5.jpg'
import gpt3 from '../../assets/pj6.jpg'
import portfolio from '../../assets/pj1.jpg'
import queuingsystem from '../../assets/pj2.jpg'
import insight from '../../assets/pj3.jpg'

export const projects = [
    {
        src: portfolio,
        name: 'My Portfolio',
        type: 'My Personal Website ',
        desc: ['Welcome to my personal website!'],
        technology: ['ReactJs', 'React Hook', 'Javascript', 'HTML', 'CSS', 'EmailJs'],
        preview: '#',
        srcCode: 'https://github.com/hieutm1501/my-portfolio',
        color: '#00ccff'
    },
    {
        src: queuingsystem,
        name: 'Coza Store',
        type: 'Sales website',
        desc: ['Main effects of a sales website',
            'Beautiful effects along with beautiful user interfaces',
            'The website CRUD and Cart functions perform',
        ],
        technology: ['JavaScript', 'HTML', 'Css', 'Mokiapi',],
        preview: 'https://shopcoza.vercel.app/',
        srcCode: 'https://github.com/hieutm1501/shopmhieu',
        color: '#ff7506'
    },
    {
        src: insight,
        name: 'BookStore',
        type: 'Sales website ',
        desc: ['Main effects of a sales website',
            'Beautiful effects along with beautiful user interfaces',
            'The website CRUD and Cart functions perform',
        ],
        technology: ['JavaScript', 'HTML', 'Css', 'Mokiapi', 'Json-server'],
        preview: 'https://bookmhieu.vercel.app/',
        srcCode: 'https://github.com/hieutm1501/bookstore',
        color: '#4f75ff'
    },
    {
        src: reddit,
        name: 'Music app',
        type: 'Music Media',
        desc: ['Website for individuals to listen to music.',],
        technology: ['JavaScripts', 'HTML', 'CSS',],
        preview: 'https://musictm.vercel.app/',
        srcCode: 'https://github.com/hieutm1501/music',
        color: '#be0001'
    },
    {
        src: gpt3,
        name: 'Nội Thất Châu Âu',
        type: 'Landing Page website',
        desc: ['Website selling beautiful European furniture.',
            'Design an interface that is close to shoppers.'],
        technology: ['Angular', 'Nodejs', 'HTML', 'CSS3', 'Bootstraps', 'PRIMENG'],
        preview: 'none',
        srcCode: 'https://github.com/manhcuong8123/interior',
        color: '#1a6773'
    },
    {
        src: tgdd,
        name: 'Interior Shop',
        type: 'Interior Website',
        desc: ['Furniture sales website',
            'Using MonggoDB database',
            'Use libraries for frontEnd and BackEnd.'
        ],
        technology: ['TypeScripts', 'Nodejs', 'Redux/Redux-Tokit', 'HTML', 'CSS', 'Tailwind', 'Javascript', "MonggoDB",],
        preview: 'none',
        srcCode: 'https://github.com/hieutm1501/FW2_FE',
        color: '#ffd323'
    },


]