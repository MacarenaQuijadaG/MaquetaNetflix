import Carousel from 'react-bootstrap/Carousel';
import '../Css/Carrusel.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='container mt-2'>
            <div className='d-flex justify-content-center'>
                <img className= 'img-fluid mx-1' src={require('../imagenes/aqua.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/aladin.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/et.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/troll.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/adams.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/black.jpg' )} alt='' />
            </div>
        </div>
      
      </Carousel.Item>
      <Carousel.Item>
        <div className='container mt-2'>
            <div className='d-flex justify-content-center'>
                <img className= 'img-fluid mx-1' src={require('../imagenes/aqua.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/aladin.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/et.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/troll.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/adams.jpg' )} alt='' />
                <img className= 'img-fluid mx-1' src={require('../imagenes/black.jpg' )} alt='' />

              {/* comentario */}

                
            </div>
        </div>
      
      </Carousel.Item>
    </Carousel>

    
  );
}

export default DarkVariantExample;