import Home from '../Pages/Home/Home'
import Categories from '../Pages/Categories/Categories'
import Business from '../Pages/Business/Business'
import Politics from '../Pages/Politics/Politics'
import Health from '../Pages/Health/Health'
import Design from  '../Pages/Design/Design'
import Sport from '../Pages/Sport/Sport'
import Contact from '../Pages/Contact/Contact'
import image1 from '../Assets/image.jpg'

const pagesData=[
    {label:"Home",
    url:"/",
    component:<Home/>
    },
    
    {
        label:"Categories",
        url:"/categories",
        component:<Categories/>
    },
    {
        label:"Politics",
        url:"/Politics",
        component:<Politics />
    },
    {
        label:"Business",
        url:"/business",
        component:<Business/>
    },
    {
        label:"Health",
        url:"/health",
        component:<Health/>
    },
    {
        label:"Design",
        url:"/design",
        component:<Design/>
    },
    {
        label:"Sport",
        url:"/sport",
        component:<Sport/>
    },
    {
        label:"Contact",
        url:"/contact",
        component:<Contact/>
    },
];
const politicsData=[
    {
       image: image1,
       imageDetail: "this is the first image",
    },
    
];
const inputData=[
    {
        input:"text",
        placeholder:"Search...",

    },
];
export {pagesData,inputData, politicsData};