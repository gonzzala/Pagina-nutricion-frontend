import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageSlider({ images, imageStyles }) {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img
              alt={`product_image_${index}`}
              src={image.image_url}
              style={imageStyles}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
