import { tempFxn } from "../getStores";
import {Carousel, CarouselItem} from 'react-bootstrap';

export default async function StoreLocations () {
    // get db data as JSON and prepare to push into an arr to map onto react component
    const storesList = await tempFxn();
    let storesArr = [];

    const storesImages = [
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    storesList.stores.forEach(store => {
        storesArr.push(store);
    })

    const storesElement = storesArr.map((store) =>
        <CarouselItem key={store.id}>
            <div className="card text-white" id="storeCard">
                <img className="card-img-top object-fit-cover" style={{height: "65vh"}} src={storesImages[store.id - 1]} alt="a drop of water into a body of water" />
                <div className="card-body ml-3">
                    <h5 className="card-title">{store.branch}</h5>
                    <p className="card-text">Address: {store.address}</p>
                    <div className="row mb-3">
                        <h5 className="card-text col-2">Open: {store.hourOpen} AM</h5>
                        <h5 className="card-text col-2"> Close: 
                            {
                                store.hourClose > 12 ? ` ${store.hourClose - 12} PM`: ` ${store.hourClose}AM`
                            }
                        </h5>
                    </div>
                    <div className="card-footer">
                        <h5 className="card-text mt-2">Phone: <span><a href={`tel:${store.phone}`} className="text-white">{store.phone}</a></span></h5>
                    </div>
                </div>
            </div>
        </CarouselItem> 
    )

    return (
        <>
            <Carousel interval={null} className="shadow">
                {storesElement}
            </Carousel>
        </>
    )
}