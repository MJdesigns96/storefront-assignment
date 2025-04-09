<<<<<<< HEAD
import Cards from "./cards";
import ProductCards from "../components/ProductCards";
=======
import ItemsListItems from "../components/ProductCards";
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4

export const metadata = {
    title: "Products List | Storefront",
    description: "A list of products currently being sold in stores"
};

<<<<<<< HEAD
export default function Products(props) {

// create a parallax effect for the background https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_parallax
// use an image and scroll downwards to show product details
// https://codepen.io/ibrahima92/pen/ExYZPqg

=======
export default function Products() {
    let userCurrency = 1;
    const currencyAmount = [1, 1.35];
    const currencyName = ["CAD", "USD"];
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4
return (
    <div className="row">
        <div className="col">
            <div className="row">
                <h1>Product Inventory</h1>
            </div>
            <div className="row">
                <p>Listed below are products that are currently being housed in our stores.</p>
            </div>
            <div className="row mb-5">
                <div className="col">
<<<<<<< HEAD
                    <ProductCards />
=======
                    <ItemsListItems currencyAmount ={currencyAmount} currencyName = {currencyName} userCurrency = {userCurrency} />
>>>>>>> cda6e0a7c29af54c118c5d7a94e679104c427bd4
                </div>
            </div>
        </div>
    </div>
)
}