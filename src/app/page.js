import ItemsListItems from "./components/ProductCards";
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
                <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={waterBottle.src} alt="Landing Picture" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={citrus.src} alt="citrus suspended in water" />
            </CarouselItem>
            <CarouselItem>
                <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={drop.src} alt="a drop of water into a body of water" />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div className="row">
         <ItemsListItems />
      </div>
    </>
  );
}
