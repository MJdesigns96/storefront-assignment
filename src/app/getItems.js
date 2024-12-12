'use server'

import Item from './items';
import dbConnect from './db';

// use async fxn to retreive data from db
const getItems = async () => {
    await dbConnect();
    let temp =  Item.find({}).sort();
    return temp;
}

// Convert the db info to static prop JSON data so components can use it
const tempFxn = async () => {
    let items =  await getItems();
    const data = { items: JSON.parse(JSON.stringify(items)) };
    return data;
}

export { tempFxn }