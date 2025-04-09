import ProductCards from "./components/ProductCards";
import {Carousel, CarouselItem} from 'react-bootstrap';
import waterBottle from '../../public/waterBottle.jpg'
import citrus from '../../public/citrus.jpg'
import drop from '../../public/drop.jpg'

export default async function Home() {
  // organize the db conneciton for the items into directories so that it is easier and cleaner to connect and such then save the items to a state var
  return (
    <>
      <div className="row mb-5">
        <div className="col">
          <Carousel>
            <CarouselItem>
                <img className="d-block w-100 object-fit-cover" style={{height: "90vh"}} src={waterBottle.src} alt="Landing Picture" />
            </CarouselItem>
            {/* https://unsplash.com/photos/bear-illustration-on-orange-tumbler-nWy_OyaAWdU */}
            <CarouselItem>
                <img className="d-block w-100 object-fit-cover" style={{height: "90vh"}} src={citrus.src} alt="citrus suspended in water" />
            </CarouselItem>
            {/* https://unsplash.com/photos/sliced-orange-fruits-underwater-qpN5MLx1uwk */}
            <CarouselItem>
                <img className="d-block w-100 object-fit-cover" style={{height: "90vh"}} src={drop.src} alt="a drop of water into a body of water" />
            </CarouselItem>
            {/* https://unsplash.com/photos/water-drops-macro-photography-XSQHuGGRO3g */}
          </Carousel>
        </div>
      </div>
      <div className="row">
         <ProductCards />
      </div>
    </>
  );
}
