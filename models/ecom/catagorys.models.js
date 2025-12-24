import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageurl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    } },
   { timestamps: true }
)

export const Category = mongoose.model('Category', categorySchema)