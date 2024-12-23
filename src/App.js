import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Footer from './pages/Footer';
import About from './pages/About';
import Active from './pages/Active';
import Invest from './pages/Invest';
import Menu from './pages/Menu';
import logo from './img/Лого.png';
import pl1 from './img/Плашка 1.png';
import pl2 from './img/Плашка 2.png';
import pl3 from './img/Плашка 3.png';
import pl4 from './img/Плашка 4.png';
import map from './img/Карта.png'
import whitelogo from './img/ЛогоБ.png'
import cr1 from './img/круг1.png'
import cr2 from './img/круг2.png'
import cr3 from './img/круг3.png'
import cr4 from './img/круг4.png'
import block1 from './img/блок1.png'
import block2 from './img/блок2.png'
import block3 from './img/блок3.png'
import favicon from './img/favicon.ico'
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Рудник</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navigation img={logo}/>
      <Routes>
        <Route path='/' element={<Menu pl1 = {pl1} pl2 = {pl2} pl3 = {pl3} pl4 = {pl4} map = {map}/>}/>
        <Route path='/Active' element={<Active map = {map} cr1 = {cr1} cr2 = {cr2} cr3 = {cr3} cr4 = {cr4}/>}/>
        <Route path='/Invest' element={<Invest bl1 = {block1}  bl2 = {block2} bl3 = {block3} />}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer img={whitelogo}/>
    </>
  );
}

export default App;
