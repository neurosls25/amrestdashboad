import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Create Computers Schema
const computersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field its required!'],
    },
    model: {
        type: String,
        requiered: true,
    },
    specs: {
        procesor: {
            type: String,
            requiered: true
        },
        memory: {
            type: String,
            requiered: true
        },
        ssd: {
            type: String,
            requiered: true
        },
        hdd: {
            type: String,
            requiered: true
        }
    }
});