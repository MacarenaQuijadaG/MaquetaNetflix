import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='container'>
            <img className= 'd-block w-100' src={require('../imagenes/aqua.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/coco.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/et.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/huye.jpg' )} alt='' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
            <img className= 'd-block w-100' src={require('../imagenes/aqua.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/coco.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/et.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/huye.jpg' )} alt='' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container'>
            <img className= 'd-block w-100' src={require('../imagenes/aqua.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/coco.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/et.jpg' )} alt='' />
            <img className= 'd-block w-100' src={require('../imagenes/huye.jpg' )} alt='' />
     </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;