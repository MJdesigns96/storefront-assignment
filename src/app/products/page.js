import Cards from "./cards";
import ProductCards from "../components/ProductCards";

export const metadata = {
    title: "Products List | Storefront",
    description: "A list of products currently being sold in stores"
};

export default function Products(props) {

// create a parallax effect for the background https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_parallax
// use an image and scroll downwards to show product details
// https://codepen.io/ibrahima92/pen/ExYZPqg

return (
    <div className="row">
        <div className="col">
            <div className="row">
                <h1>Product Inventory</h1>
            </div>
            <div className="row">
                <p>Listed below are products that are currently being housed in our stores.</p>
            </div>
            <div className="row">
                <div className="col">
                    <ProductCards />
                </div>
            </div>
        </div>
    </div>
)
}