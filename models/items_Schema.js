const mongoose = require('mongoose');

const Item = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number,
    },
    location : {
        type : String,
    },
    brand : {
        type : String,
    },
    purchaseYear : {
        type : String
    },
    description : {
        type : String
    },
    postedAt :{
        type: Date,
        immutable: true,
        default: () => { 
            return Date.now()
        }
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('items',Item);

// itemID they should get details of the Item (Item Description, Price, Location, Brand, Purchase Year, Item Ad Posting Date etc)