// App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home'; // Assurez-vous que le composant Home est importé
import Clients from './Clients';
import Stock from './Stock';
import Commandes from './Commandes';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/commandes" element={<Commandes />} />
      </Routes>
    </>
  );
}

export default App;
