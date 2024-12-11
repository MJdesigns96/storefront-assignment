'use server'

import Item from './items';
import dbConnect from './db';

const getItems = async () => {
    await dbConnect();
    let temp =  Item.find({}).sort();
    return temp;
}

const tempFxn = async () => {
    let items =  await getItems();
    const data = { items: JSON.parse(JSON.stringify(items)) };
    return data;
}

export { tempFxn }