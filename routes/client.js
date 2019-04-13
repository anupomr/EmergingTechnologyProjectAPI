var express = require('express');
var router = express.Router();
let clientModel=require('../model/client.model')
//Get All client
router.get('/clients', function(req, res, next){
    clientModel.find(function(err,client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
});
//Get single client
router.get('/client/:id', function(req, res, next){
    clientModel.findById(req.params.id, function(err, client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
});

//Save client
router.post('/client', function(req, res, next){
    var client = req.body;
    if(!client.clientcode){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        
        clientModel.create(client, function(err, client){
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }
});

// Delete Task
router.delete('/client/:id', function(req, res, next){
    clientModel.findByIdAndRemove(req.params.id, function(err, client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
});
// Update Task
router.put('/client/:id', function(req, res, next){
    var client = req.body;
    var updClient = {};
    
    if(client.clientcode){
        updClient.clientcode = client.clientcode;
    }
    
  
    
    if(!updClient){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        clientModel.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
    }
});
module.exports = router;