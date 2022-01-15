import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: String,
    title: String,
    description: String,
    currentCompany: String,
    describYorself: String,
    phoneNumber: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const UserModel = mongoose.model("UserModel", userSchema)

export default UserModel;