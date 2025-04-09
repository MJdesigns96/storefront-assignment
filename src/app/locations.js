import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    hourOpen: {
        type: Number,
        required: true,
    },
    hourClose: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});


export default mongoose.models.Locations || mongoose.model('Locations', LocationSchema);