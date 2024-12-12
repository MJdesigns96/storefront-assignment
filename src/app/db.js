import mongoose from "mongoose";

  // connect to the DB
  const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;
  if (!dbUrl) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env',
    )
};

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
};

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    };
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(dbUrl, opts).then(mongoose => {
            console.log('Db connected')
            return mongoose
        })
    };
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    };

    return cached.conn;
}

export default dbConnect;