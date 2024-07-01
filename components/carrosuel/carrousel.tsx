

import Carousel from 'react-bootstrap/Carousel';
import "./carousel.scss"





export function  Carrousel() {

  const photoI = 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663709834_25-mykaleidoscope-ru-p-armyanskii-stol-s-yedoi-yeda-instagram-27.jpg'
  const photoII = 'http://mtdata.ru/u17/photoB3BA/20069933775-0/original.jpg'
  const photoIII = 'https://www.fonstola.ru/images/202012/fonstola.ru_419290.jpg';
  return (
    <Carousel className='carrousel'>
      <Carousel.Item className='item'>
        <img src={photoI} alt="photo of georgia" />
                <Carousel.Caption>
          <h1 className='text'>Georgian cuisine</h1>
          <p className='sectext'>Georgian cuisine is one of the best and tastiest in the world, Georgia cannot be imagined without it. Every corner has its own dish</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='item'>
        <img src={photoII} alt="photo of georgia" />
        <Carousel.Caption >
          <h1 className='text'>Discover unique Georgia</h1>
          <p className='sectext'>Here you will find beautiful places, every corner is special, you will see many special and different cultures and customs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img src={photoIII} alt="photo of tbilisi" />
          <Carousel.Caption>
          <h1 className='textt'>Tbilisi - The Capital of Georgia</h1>
          <p className='sectext'>
          One of the most beautiful cities in Europe, everything here is so beautiful that you will not forget yourself. Here you will see old, new and latest architecture mixed together
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

