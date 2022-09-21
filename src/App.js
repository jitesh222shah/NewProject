  import { BrowserRouter } from 'react-router-dom';
  import Routing from "../src/Routing/Routing"
  import './App.css';
import { pagesData } from './DummyData/DummyData';
  

  const  App= ()=> {
    return (

    <BrowserRouter>
    <Routing pagesData={pagesData}/>
    </BrowserRouter>

    );
  }

  export default App;
