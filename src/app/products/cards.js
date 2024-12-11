export default function Cards () {
    class itemDetails {
        constructor(itemName, itemDescription, categories, price, size, stock) {
            this.itemName = itemName;
            this.itemDescription = itemDescription;
            this.categories = categories;
            this.price = price;
            this.size = size;
            this.stock = stock;
        }
    };

    let testArr = [];
    let testItem1 = new itemDetails("foo", "bar", ["temp"], 100, "Medium", 10);
    let testItem2 = new itemDetails("Iten2", "This item has a decently sized description", ["shirt"], 25, "Medium", 23);
    testArr.push(testItem1);
    testArr.push(testItem2);

    const cards = testArr.map(entry => 
        <>
            <div className="card col-6 mb-3">
                <h3 className="card-title mt-2">{entry.itemName}</h3>
                <div className="card-body row">
                    <p className="card-text">{entry.itemDescription}</p>
                </div>         
                <div className="row">
                    <div className="col">
                        <small>Size: {entry.size}</small>
                    </div>
                    <div className="col">
                        <small>Stock: {entry.stock}</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* the a tag below is meant to make call a filter fxn later where a page is shown with just the filtered categories */}
                        {/* https://react.dev/learn/rendering-lists#filtering-arrays-of-items */}
                        <a href="#" className="card-link">{entry.categories}</a>
                    </div>
                    <div className="col">
                        <p className="card-text">${entry.price}</p>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="col">
            {cards}
        </div>
    )
}