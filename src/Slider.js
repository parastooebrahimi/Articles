import React from 'react';
import { Carousel} from 'react-bootstrap';


class Slider extends React.Component{
    render(){
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://roocket.ir/public/image/2018/6/7/pwa-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://roocket.ir/public/image/2018/9/23/flutter-1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://roocket.ir/public/images/2017/10/23/1508774666react-js-2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        )
    }
}
export default Slider;