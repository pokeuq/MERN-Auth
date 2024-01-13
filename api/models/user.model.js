import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    profilePicture: {
        type: String,
        default: 'https://i.pinimg.com/236x/33/e6/c5/33e6c54a28ce514dbcba3d5a9610eea0.jpg'
    }

}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User