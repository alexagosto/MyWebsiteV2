import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PaintingPortfolio from './components/PaintingPortfolio'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={'/about'} index element={<About />} />
        <Route path={'/contact'} index element={<Contact />} />
        <Route path={'/paintings'} index element={<PaintingPortfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
