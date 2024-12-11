'use server'

import Item from './items';
import dbConnect from './db';

const getItems = async () => {
    await dbConnect();
    return Item.find()
}

export { getItems }