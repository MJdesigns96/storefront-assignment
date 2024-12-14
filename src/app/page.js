import ItemsListItems from "./components/ProductCards";
import StoreLocations from "./components/StoreLocations";
import AboutUs from "./components/Aboutus";
import waterBottle from '../../public/waterBottle.jpg'
import styles from './styles.modules.css';



export default async function Home() {
  // organize the db conneciton for the items into directories so that it is easier and cleaner to connect and such then save the items to a state var
  return (
    <>  
      <div className="row gx-0 px-0">
        <div className="col">
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
         <ItemsListItems />
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
      </div>
    </>
  );
}
