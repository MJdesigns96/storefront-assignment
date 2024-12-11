import Cards from "./cards";

export const metadata = {
    title: "Products List | Storefront",
    description: "A list of products currently being sold in stores"
};

export default function Products(props) {



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
                <div className="col-6">
                    <Cards />
                </div>
            </div>
        </div>
    </div>
)
}