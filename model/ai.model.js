const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var aiSchema = new Schema(
    {
        fullName: {
            type:String,
            required: true,
            unique: true
        },
        temp: {
                type: String,
                trim: true               
            },
        hrate:{
            type: String,
            trim: true               
        }, 
        bplow:{
            type: String,
            trim: true               
        }, 
        bphigh:{
            type: String,
            trim: true               
        }, 
        resp:{
            type: String,
            trim: true               
        }
            
     },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ai", aiSchema);