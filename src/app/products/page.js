import ItemsListItems from "../components/ProductCards";

export const metadata = {
    title: "Products List | Storefront",
    description: "A list of products currently being sold in stores"
};

export default function Products() {
    let userCurrency = 1;
    const currencyAmount = [1, 1.35];
    const currencyName = ["CAD", "USD"];
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
                    <ItemsListItems currencyAmount ={currencyAmount} currencyName = {currencyName} userCurrency = {userCurrency} />
                </div>
            </div>
        </div>
    </div>
)
}