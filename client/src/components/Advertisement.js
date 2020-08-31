import React from 'react';
import { Fade } from 'react-slideshow-image';

// Advertisement images
const Images = [
  'https://react-slideshow.herokuapp.com/assets/images/slide_7.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_6.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_5.jpg',
  'https://react-slideshow.herokuapp.com/assets/images/slide_4.jpg',
];

const properties = {
  duration: 3000,
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
}

const Advertisement = () => {
  return (
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <img src={Images[0]} alt="test"/>
          </div>
          <div className="each-fade">
            <img src={Images[1]} alt="test"/>
          </div>
          <div className="each-fade">
            <img src={Images[2]} alt="test"/>
          </div>
          <div className="each-fade">
            <img src={Images[3]} alt="test"/>
          </div>
        </Fade>
      </div>
  );
};
export default Advertisement;