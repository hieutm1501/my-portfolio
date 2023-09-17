import './App.css'
import About from "../src/components/About/About";
import Background from './components/Background/Background';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skill from './components/Skills/Skill';



function App() {


  return (
    <>
      <Background />
      <Header />
      <Navbar />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  )
}

export default App
