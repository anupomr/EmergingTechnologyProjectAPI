var express = require('express');
var router = express.Router();
let alertModel=require('../model/alert.model')
//Get All client
router.get('/alerts', function(req, res, next){
    alertModel.find(function(err,client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
});

//Save client
router.post('/alert', function(req, res, next){
    var client = req.body;
    if(!client.clientcode){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        
        alertModel.create(client, function(err, client){
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }
});
module.exports = router;