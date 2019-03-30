import React, { Component }  from 'react';
import './slide.css';
import { Slide } from 'react-slideshow-image';
import blo from '../img/2162634.jpg';
import bla from '../img/diamond.png';
import bli from '../img/diamond-icon.png';
 
class Slides extends Component {
  constructor() {
    super();
    this.state = {
      slideImages: [
        blo,
        bla,
        bli
      ],
      message:[
        'Mantente conectada con todas tus compañeras.',
        'Seguimiento de tu recorrido ida y vuelta.',
        'Puedes pedir ayuda con el botón de emergencia.'
      ]
    };
  }

  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true
    };

    const { slideImages, message} = this.state;
    return (
      <div className="slides">
        <div className="slide-container">
          <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})` }}>
                  <p>{message[index]}</p>
                </div>                
              </div>
            ))}                 
          </Slide>
        </div>
        <p>Saltar</p>
      </div>
    );
  }
}

export default Slides;

