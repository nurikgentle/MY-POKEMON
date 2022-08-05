import './App.css';
import Navbar from './components/NAVBAR/Navbar';
import { Routes, Route } from 'react-router-dom'
import All from './pages/ALL/All';
import Contact from './pages/CONTACTS/Contact';
import Help from './pages/HELP/Help';
import Footer from './components/FOOTER/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <All /> }/>
        <Route path='/help' element={ <Help /> }/>
        <Route path='/contacts' element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
