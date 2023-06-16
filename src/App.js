import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<h1> Hello </h1>}/>
        <Route path = "/Home" element ={<h1> Home </h1>}/>
        <Route path = "/Aboutus" element ={<h1> Aboutus </h1>}/>
        {/**if user enter wrong address */}
        <Route path = "*" element ={<h1> Page not found </h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
