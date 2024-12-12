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
        <div className='col-4 mb-2 d-flex align-items-stretch' key={entry.id}>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>{ entry.name }</h3>
                    <p className='card-text'>{ entry.description }</p>
                </div>
                <div className='card-footer'>
                    <div className='row align-items-center mt-auto'>
                        <div className='col text-center '><h3>${ entry.price.toFixed(2) }</h3></div>
                        { stockCheker(entry.stock) }
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <div className='row card-group'>
            { itemsElement }
        </div>
    )
}