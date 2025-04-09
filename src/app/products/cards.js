import { tempFxn } from '../getItems';

export default async function Cards () {
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

    //populate the arr with db data
    const itemsList = await tempFxn();
    let testArr = [];
    itemsList.items.forEach(entry => {
        testArr.push(entry);
    })

    const cards = testArr.map(entry => 
        <>
            <div className="card col-6 mb-3">
                <h3 className="card-title mt-2">{entry.itemName}</h3>
                <div className="card-body row">
                    <p className="card-text">{entry.description}</p>
                </div>         
                <div className="row">
                    <div className="col">
                        <small>Stock: {entry.stock}</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="card-text">${entry.price}</p>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className='row'>
            {cards}
        </div>
    )
}