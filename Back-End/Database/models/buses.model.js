const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');

const BusesSchema = new Schema(
    {
        plateNumber: {
            type: String
        },
        capacity: {
            type: Number
        },
        companyName: {
            type: String
        },
        seatLayout: {
            type: String
        },
        route: {
            type: String
        },
        fare: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

BusesSchema.plugin(mongoosePaginate);
const Buses = mongoose.model("Buses", BusesSchema);

module.exports = Buses;
