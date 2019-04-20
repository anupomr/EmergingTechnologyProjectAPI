var express = require('express');
var router = express.Router();
let aiModel=require('../model/ai.model')
//Get All ai
router.get('/ai', function(req, res, next){
    aiModel.find(function(err,ai){
        if(err){
            res.send(err);
        }
        res.json(ai);
    });
});

//Save ai
router.post('/ai', function(req, res, next){
    var ai = req.body;
    if(!ai.fullName){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        
        aiModel.create(ai, function(err, ai){
            if(err){
                res.send(err);
            }
            res.json(ai);
        });
    }
});
module.exports = router;