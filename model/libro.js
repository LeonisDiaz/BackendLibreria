const { timeStamp } = require("node:console");
const { required } = require("zod/mini");

const {Schema, model} = require('mongoose');

const libroSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        unique: true
    },
    autor: {
        type: String,
        required: true
    },
    apublicacion: {
        type: String,
    },
    editorial: {
        type: String,
    },
    categoria: {
        type: String,
    },
    sede: {
        type: String,
    }
}, {
    timestamps: true
});

libroSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Libro', libroSchema);