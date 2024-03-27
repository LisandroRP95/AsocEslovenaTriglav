import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from './Components/Activities/Activities';
import NavBar from './Components/NavBar/NavBar';
import Info from './Components/Info/Info';
import NotesOfInterest from './Components/NotesOfInterest/NotesOfInterest';
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import Footer from './Components/Footer/Footer'
import MainSite from './Components/MainSite/MainSite';
import Location from './Components/Location/Location';
import Contact from './Components/Contact/Contact';
import Institutional from './Components/Institutional/Institutional';

function App() {

  return (
    <>

      <BrowserRouter>

          <NavBar/>

          <Routes>

               <Route path='/' element={<MainSite/>}/>
               <Route path='/actividades' element={<Activities/>}/>
               <Route path='/institucional' element={<Institutional/>}/>
               <Route path='/informacion' element={<Info/>}/>
               <Route path='/notasdeinteres' element={<NotesOfInterest/>}/>
               <Route path='/galeriadefotos' element={<PhotoGallery/>}/>
               <Route path='/ubicacion' element={<Location/>}/>
               <Route path='/contacto' element={<Contact/>}/>

          </Routes>

          <Footer/>

      </BrowserRouter>

    </>
  )
}

export default App
