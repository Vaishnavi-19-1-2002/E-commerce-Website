import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from '../../../backend/data'
import Product from "../components/Product";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Slide = () => {
      return (
        <div>
            <Carousel responsive={responsive}>
                {
                    data.map((product) => (
                        product.tag === "festival" && <Product key={product._id} product={product}></Product>         
                    ))
                }
            </Carousel>
        </div>
      );
  };

export default Slide;
