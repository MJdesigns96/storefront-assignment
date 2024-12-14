import ItemsListItems from "./components/ProductCards";
import AboutUs from "./components/aboutus";
import {Carousel, CarouselItem} from 'react-bootstrap';
import waterBottle from '../../public/waterBottle.jpg'
import citrus from '../../public/citrus.jpg'
import drop from '../../public/drop.jpg'
import styles from './styles.modules.css';


export default async function Home() {
  // organize the db conneciton for the items into directories so that it is easier and cleaner to connect and such then save the items to a state var
  return (
    <>  
      <div className="row gx-0">
        <div className="col">
          <div className="parallax" style={{backgroundImage: `url(${waterBottle.src})`, minHeight: "80vh"}}>
          </div>
        </div>
        
        {/* <div className="col"> */}
          {/* <Carousel> */}
            {/* <CarouselItem> */}
                {/* <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={waterBottle.src} alt="Landing Picture" /> */}
            {/* </CarouselItem> */}
            {/* https://unsplash.com/photos/bear-illustration-on-orange-tumbler-nWy_OyaAWdU */}
            {/* <CarouselItem> */}
                {/* <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={citrus.src} alt="citrus suspended in water" /> */}
            {/* </CarouselItem> */}
            {/* https://unsplash.com/photos/sliced-orange-fruits-underwater-qpN5MLx1uwk */}
            {/* <CarouselItem> */}
                {/* <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={drop.src} alt="a drop of water into a body of water" /> */}
            {/* </CarouselItem> */}
            {/* https://unsplash.com/photos/water-drops-macro-photography-XSQHuGGRO3g */}
          {/* </Carousel> */}
        {/* </div> */}
      </div>
      <AboutUs />
      <div className="row mb-3 px-5 gx-5">
          <h2>Bottles</h2>
          <p>Come see why our bottles are making a difference.</p>
        </div>
      <div className="row px-5 gx-5">
         <ItemsListItems />
      </div>
      <div className="storeCards row">
        Store cards
      </div>
    </>
  );
}
