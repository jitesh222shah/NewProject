import Home from '../Pages/Home/Home'
import Categories from '../Pages/Categories/Categories'

import Politics from '../Pages/Politics/Politics'

import Sport from '../Pages/Sport/Sport'
import Contact from '../Pages/Contact/Contact'
import image1 from '../Assets/image1.jpg'
import nature from '../Assets/nature.jpg'
import temple from '../Assets/temple.jpg'

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
 // {
    //     label:"Business",
    //     url:"/business",
    //     component:<Business/>
    // },
    // {
    //     label:"Health",
    //     url:"/health",
    //     component:<Health/>
    // },
    // {
    //     label:"Design",
    //     url:"/design",
    //     component:<Design/>
    // },
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
const politicsImageData=[
    {
       image: image1,
       title:"Cameraman shows the beauty of the wonderful women",
       imageDetail: "Just at the end of the code before the component was exported, you create a React app. Now, wherever we import this component, those values will be the initial values instead of being blank. When you pass in data to the child component like we did in previous sections, it overrides the default values.",

    },
    {
        image: nature,
        title:"The Nature's beauty is the best medicine for Human ",
        imageDetail:"Just at the end of the code before,we started with the component's name and a dot/period connecting it with defaultProps which is built in when you create a React app. Now, wherever we import this component, those values will be the initial values instead of being blank. When you pass in data to the child component like we did in previous sections, it overrides the default values.",


    },
    {
        image: temple ,
        title:"This is the temple of Narayani",
        imageDetail:"Just at the end of the code before the component was exported, props. To do that, we started with the component's name and a dot/period connecting it with defaultProps which is built in when you create a React app. Now, wherever we import this component, those values will be the initial values instead of being blank. When you pass in data to the child component like we did in previous sections, it overrides the default values.",

    },
    
];
const inputData=[
    {
        input:"text",
        placeholder:"Search...",

    },
];
export {pagesData,inputData, politicsImageData};