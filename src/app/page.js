<<<<<<< HEAD
import ProductCards from "./components/ProductCards";
import {Carousel, CarouselItem} from 'react-bootstrap';
=======
import ItemsListItems from "./components/ProductCards";
import StoreLocations from "./components/StoreLocations";
import AboutUs from "./components/Aboutus";
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4
import waterBottle from '../../public/waterBottle.jpg'
import styles from './styles.modules.css';

export default function Home() {
  let userCurrency = 1;
  const currencyAmount = [1, 1.35];
  const currencyName = ["CAD", "USD"];

  return (
    <>  
      <div className="row gx-0 px-0">
        <div className="col">
<<<<<<< HEAD
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
=======
          {/* Parallax scroll item */}
          <div className="parallax" style={{backgroundImage: `url(${waterBottle.src})`, minHeight: "80vh"}}>
          </div>
        </div>
      </div>
      <AboutUs />
      <div className="row mb-3 px-5 gx-5 py-5 blueBackground">
        <h2>Bottles</h2>
        <p>Come see why our bottles are making a difference.</p>
      </div>
      <div className="row px-5 gx-5">
         <ItemsListItems currencyAmount = {currencyAmount} currencyName = {currencyName} userCurrency = {userCurrency} />
      </div>
      <div className="storeCards row mt-5 py-5 px-5">
        <h2>Locations</h2>
        <p>Come in store to see some of our wares and speak to the people making a difference.</p>
        <StoreLocations />
      </div>
      <div className="row px-5 py-5 bg-body-secondary">
        <div className="col text-center">
          <h3>Sustainability</h3>
          <p>We care about the earth!</p>
          <p>At H2Water we strive to reduce our carbon footprint to near zero. We hold ourselves accountable and strive to meet our climate goals.</p>
        </div>
        <div className="col text-center">
          <h3>Materials</h3>
          <p>Reduce, Reuse, Recycle!</p>
          <p>At H2Water we use as much as we can from recycled materials. We can't put the fossil fuels back into the ground but we can reuse the ones that already are out there.</p>
        </div>
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4
      </div>
    </>
  );
}
