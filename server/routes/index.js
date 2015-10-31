var express = require('express');
var router = express.Router();
var path = require('path');

// perform add and send back result
router.post("/add", function(req,res,next){
    var result = parseFloat(req.body.xInput) + parseFloat(req.body.yInput);
    res.send(result.toString());
});

// perform subtract and send back result
router.post("/subtract", function(req,res,next){
    var result = parseFloat(req.body.xInput) - parseFloat(req.body.yInput);
    res.send(result.toString());
});

// perform multiply and send back result
router.post("/multiply", function(req,res,next){
    var result = parseFloat(req.body.xInput) * parseFloat(req.body.yInput);
    res.send(result.toString());
});

// perform divide and send back result
router.post("/divide", function(req,res,next){
    var result = parseFloat(req.body.xInput) / parseFloat(req.body.yInput);
    res.send(result.toString());
});

// serves up the index page and asset files
router.get("/*", function(req,res,next){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public/", file))
});

// export router
module.exports = router;