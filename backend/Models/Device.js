const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deviceSchema = new Schema({
    deviceName: {
        type: String
    },
    deviceType: {
        type: String
    },
    status: {
        type: String
    },
    locked: {
        type: Boolean
    }
}, {
    collection: 'devices'
});

module.exports = mongoose.model('Device', deviceSchema)