'use server'

import locations from './locations';
import dbConnect from './db';

// use async fxn to retreive data from db
const getStores = async () => {
    await dbConnect();
    let temp =  locations.find({}).sort();
    return temp;
}

// Convert the db info to static prop JSON data so components can use it
const tempFxn = async () => {
    let stores =  await getStores();
    const data = { stores: JSON.parse(JSON.stringify(stores)) };
    return data;
}

export { tempFxn }