import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please add a valid email'
        ],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    status: {
    type: String,
    enum: ['online', 'offline', 'away'],
    default: 'offline'}
    ,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)