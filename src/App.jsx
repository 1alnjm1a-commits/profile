import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Project from './pages/project/Project.jsx';
import Footer from "./components/Footer.jsx"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
