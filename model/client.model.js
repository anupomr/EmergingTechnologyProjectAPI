const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clientSchema = new Schema(
    {
        clientcode: {
            type: String,
            required: true,
            unique: false
        },     
 
        temperature: {
            type: String,
            required: false,
            unique: false
        },
        heartrate: {
            type: String,
            required: false,
            unique: false
        },
        bloodpressure: {
            type: String,
            required: false,
            unique: false
        },
        respiratoryrate: {
            type: String,
            required: false,
            unique: false
        },
        tips: {
            type: String,
            required: false,
            maxlength: 50,
            set: function (str) { /* custom setter method */
                if (str) {
                    //replace word 'password' with *** goablly within the string
                    return str.replace(/pin/g, "###");
                }
                return str;
            }
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("client", clientSchema);
