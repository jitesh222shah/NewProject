import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Politics from "../Pages/Politics/Politics";
import Business from "../Pages/Business/Business";
import Contact from "../Pages/Contact/Contact";
import Health from "../Pages/Health/Health";
import Design from "../Pages/Design/Design";
import Sport from "../Pages/Sport/Sport";
const pagesData = [
  {
    component: <Home />,
    url: "/",
    label: "Home",
  },
  {
    component: <Categories />,
    url: "/categories",
    label: "categories",
  },
  {
    component: <Politics />,
    url: "/Politics",
    label: "politics",
  },
  {
    component: <Business />,
    url: "/business",
    label: "business",
  },
  {
    component: <Health />,
    url: "/health",
    label: "health",
  },
  {
    component: <Design />,
    url: "/design",
    label: "design",
  },
  {
    component: <Sport />,
    url: "/sport",
    label: "sport",
  },
  {
    component: <Contact />,
    url: "/contact",
    label: "contact",
  },
];
export { pagesData };
