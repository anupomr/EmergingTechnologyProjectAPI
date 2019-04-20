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

//Save alert
router.post('/alert', function(req, res, next){
    var alert = req.body;
    if(!alert.alertcode){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        
        alertModel.create(alert, function(err, alert){
            if(err){
                res.send(err);
            }
            res.json(alert);
        });
    }
});
module.exports = router;