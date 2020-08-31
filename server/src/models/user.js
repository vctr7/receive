import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User's Schema
const UserSchema = new Schema({
    userId: { 
        type:String, 
        default: "",
    },
    username: {
        type:String,
    },
    hashedPassword: String,
    birthday: {
        type:Date,
    },
    emailAddress: {
        type: String,
    },
    homeAddress: {
        type:String,
    },
    phoneNumber: {
        type: String,
    },
    cellphoneNumber:  {
        type: String,
    },
    SHILLA_id: String,
    SHILLA_password: String,
    LOTTE_id: String,
    LOTTE_password: String,
    SHINSEGAE_id: String,
    SHINSEGAE_password: String,
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

// Encrypt password
UserSchema.methods.setPassword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

// Check password when login
UserSchema.methods.checkPassword = async function(password){
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
};

// Set SHILLA ID & PW
UserSchema.methods.setDutySHILLA = async function(SHILLA_id, SHILLA_password){
    this.SHILLA_id = SHILLA_id;
    this.SHILLA_password = SHILLA_password;
}

// Set LOTTE ID & PW
UserSchema.methods.setDutyLOTTE = async function(LOTTE_id, LOTTE_password){
    this.LOTTE_id = LOTTE_id;
    this.LOTTE_password = LOTTE_password;
}

// Set SHINSEGAE ID & PW
UserSchema.methods.setDutySHINSEGAE = async function(SHINSEGAE_id, SHINSEGAE_password){
    this.SHINSEGAE_id = SHINSEGAE_id;
    this.SHINSEGAE_password = SHINSEGAE_password;
}


// Find user in mongodb
UserSchema.statics.findByUserId = function(userId){
    return this.findOne({userId});
};

// Serialize User record
UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

// Generate token for user
UserSchema.methods.generateToken = function(){
    const token = jwt.sign(
        {
            _id: this.id,
            userId: this.userId,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d',
        },
    );
    return token;
};

const User = mongoose.model('User', UserSchema);
export default User;