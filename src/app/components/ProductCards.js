// 'use client'
import { tempFxn } from '../getItems';

export default async function ItemsListItems() {
    const itemsList = await tempFxn();
    // console.log(itemsList.items);
    let itemsArr = [];
    itemsList.items.forEach(entry => {
        itemsArr.push(entry);
    });

    let stockCheker = (stock) => {
        if (stock < 20) {
            return <div className='col text-danger text-center'> Only { stock } bottles left.</div>
        } 
        return <div className='col'>{ stock } bottles remaining.</div>
    }

    const itemsElement = itemsArr.map((entry) => 
        <div className='col-3 mb-2' key={entry.id}>
            <div className='card h-100'>
                <div className='card-body mx-3 mt-3'>
                    <h3 className='card-title'>{ entry.name }</h3>
                    <p className='card-text'>{ entry.description }</p>
                </div>
                <div className='card-footer mt-2'>
                    <div className='row align-items-center mt-auto'>
                        <div className='col text-center '><h3>${ entry.price.toFixed(2) } CAD</h3></div>
                        { stockCheker(entry.stock) }
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            { itemsElement }
        </div>
    )
}