import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const BigCarousel = ({ Contents }) => {
  return (
    <Carousel data-testid="carousel-1">
      {Contents.map((data, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              alt='lol'
              className="d-block w-100"
              src={data.imgUrl}
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
              <Button variant="danger" className='mt-2 mb-2'>More Info</Button>{''}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default BigCarousel;