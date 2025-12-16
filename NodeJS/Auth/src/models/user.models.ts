import {Schema, model} from 'mongoose';
import { number } from 'zod/v4/core/regexes.cjs';

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    passwordHash : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user', 'admin']
    },
    isEmailVerified : {
        type : Boolean,
        default : false
    },
    name : {
        type : String,
    },
    twoFactorEnabled : {
        type : String,
        default : false
    },
    twoFactorSecret : {
        type : String,
        default : undefined
    },
    tokenVersion : {
        type : number,
        default : 0
    },
    resetPasswordToken : {
        type : String,
        default : undefined
    },
    resetPasswordExpires : {
        type : Date,
        default : undefined
    }
}, {
        timestamps : true
    }
);

export const User = model('User', userSchema)
