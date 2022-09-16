import mongoose from "mongoose";


//create table into DB
const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        isAdmin: { type: Boolean, default: false, require: true },
    },
    {
        timestamps: true, //add date
    }
);

       const User = mongoose.model('User', userSchema);
       export default User;