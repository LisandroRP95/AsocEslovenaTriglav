import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from './Components/Activities/Activities';
import NavBar from './Components/NavBar/NavBar';
import Info from './Components/Info/Info';
import NotesOfInterest from './Components/NotesOfInterest/NotesOfInterest';
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import Footer from './Components/Footer/Footer'
import MainSite from './Components/MainSite/MainSite';

function App() {

  return (
    <>
      <NavBar/>
      <MainSite/>
      <Activities/>
      <Info/>
      <NotesOfInterest/>
      <PhotoGallery/>
      <Footer/>
    </>
  )
}

export default App
