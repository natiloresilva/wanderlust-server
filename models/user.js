const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String },
    bio: { type: String },
    profileImage: { type: String },
    pendingTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }],
    completedTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }]
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;