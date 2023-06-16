import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Link to = {"/Aboutus"}> Aboutus </Link>
       
        
      <Routes>
        
        <Route path = "/" element ={<h1> Hello </h1>}/>
        <Route path = "/Home" element ={<h1> Home </h1>}/>
        <Route path = "/Aboutus" element ={<h1> Aboutus </h1>}/>
        <Route path = "/Services" element ={<h1> Services </h1>}/>
        {/**if user enter wrong address */}
        <Route path = "*" element ={<h1> Page not found </h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Navigation(){
  const navigate = useNavigate();

  let gotoHome = ()=> navigate("/Home");
  let gotoAbout = ()=> navigate("/Aboutus");
  let gotoServices = ()=> navigate("/Services");

  return(
    <>
      <div>
        <Link to= {"/Home"}>Home Page | </Link>
        <Link to= {"/Aboutus"}>About  | </Link>
        <Link to= {"/Services"}>Services  | </Link>

      </div>  
      <hr/>
      <div>
        <input className="me-3" type="button" value ="Home" onClick ={gotoHome}/>

        <input type="button" value ="About" onClick ={gotoAbout}/>
        <input type="button" value ="Services" onClick ={gotoServices}/>
      </div>
      
      <hr/>
    </>
    
  )
}

export default App;
