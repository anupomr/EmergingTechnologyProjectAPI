const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var nurseSchema = new Schema(
    {
        alertcode: {
            type:String,
            required: true,
            unique: true
        },
        alerttitle: {
                type: String,
                required: true,
                unique: true
            }
            
     },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("alert", nurseSchema);
