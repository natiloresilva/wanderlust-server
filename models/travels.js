const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    travelCity: { type: String, required: true },
    startDate: { type: String, required: true },
    returnDate: { type: String, required: true },
    idActivities: [ ],
    travelOrganizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}); 

travelSchema.set('timestamps', true);

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;