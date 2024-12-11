// 'use client'
import { tempFxn } from '../getItems';

export default async function ItemsListItems() {
    const itemsList = await tempFxn();
    // console.log(itemsList.items);
    let itemsArr = [];
    itemsList.items.forEach(entry => {
        itemsArr.push(entry);
    });

    const itemsElement = itemsArr.map((entry) => 
        <div className='card col-4'>
            <div className='card-body'>
                <h3 className='card-title'>{ entry.name }</h3>
                <p className='card-text'>{ entry.description }</p>
                <div className='row'>
                    <div className='col'> ${ entry.price }</div>
                    <div className='col'> { entry.stock } units</div>
                </div>
            </div>
        </div>
    );

    return(
        <div className='row'>
            { itemsElement }
        </div>
    )
}