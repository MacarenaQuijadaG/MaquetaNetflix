import './App.css';
import Navbar from './Componentes/Navbar.jsx'
import Carrusel from './Componentes/Carrusel.jsx';
import Carrusel2 from './Componentes/Carrusel1.jsx';
import Carrusel3 from './Componentes/Carrusel2.jsx';

function App() {
  return (
    <div className="App">
     <div className=''>
        <Navbar></Navbar>
        <h4 className='text-left'>Series Aclamadas por la Critica</h4>
        <Carrusel> </Carrusel>
        <h4>Nuevos Lanzamientos</h4>
        <Carrusel2></Carrusel2>
        <h4>De Hollywood a tu Pantalla</h4>
        <Carrusel3></Carrusel3>
        
     </div>
    </div>
  );
}

export default App;