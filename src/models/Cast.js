import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Cast name is required!'],
        minLength: [5, 'Name is too short!'],
        match: [/^[a-zA-Z0-9]+$/, 'Name has some invalid characters!']
    },
    age: {
        type: Number,
        required: [true, 'Cast age is required!'],
        max: [120, 'Age cannot be more than 120!'],
        min: [1, 'Age cannot be less than 1!']
    },
    born: {
        type: String,
        required: [true, 'Cast born place is required!'],
        minLength: [10, 'Born shold be at least 10 characters long!'],
        match: [/^[a-zA-Z0-9]+$/, 'Born has some invalid characters!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is required!'],
        match: [/^https?:\/\//, 'Image Url is invalid!']
    },
})

const Cast = model('Cast', castSchema)

export default Cast