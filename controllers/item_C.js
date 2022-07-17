const Item = require('../models/items_Schema');

// Handler for create
exports.create = async(req, res)=>{
    const bodyObj = {
        name : req.body.name,
        price : req.body.price,
        location : req.body.location,
        brand : req.body.brand,
        purchaseYear : req.body.purchaseYear,
        description : req.body.description,
        postedBy : req._id
    };
    try{
        const items = await Item.create(bodyObj);
        res.status(201).send(items);
    }catch(err){
        res.status(500).send({
            message : "Internal error !"
        });
    }
}

// Handler for get item using item Id

exports.getItem = async(req,res)=>{
    const itemId = req.params.id;
    try{
        const items = await Item.findOne({_id : itemId});
        if(!items){
            res.status(404).send({
                message : "Item ID does not exist !"
            });
            return;
        }
        res.status(200).send(items);
    }catch(err){
        res.status(500).send({
            message : "Internal error !"
        });
    }
}

// Handler for delete Item using item Id

exports.deleteItem = async(req, res)=>{
    const itemId = req.params.id;
    try{
        
        let check  = await Item.findOne({ postedBy : req._id});
        if(!check){
            res.status(404).send({
                message : "Only posted user can delete !"
            });
            return;
        }
        let items = await Item.findOne({_id : itemId});
        if(!items){
            res.status(404).send({
                message : "Item ID does not exist !"
            });
            return;
        }
        await Item.deleteOne({_id : itemId});
        res.status(201).send({
            message : "Item Deleted Successfully"
        });
    }catch(err){
        res.status(500).send({
            message : "Internal error !"
        });
    }
}