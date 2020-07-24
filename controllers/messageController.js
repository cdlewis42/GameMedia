const db = require("../models");

module.exports = {
    findAll: function(req,res){
        console.log("findall")
        db.Message
        .find()
        .sort({date: -1})
        .then(dbModel => res.status(422).json(err));    
    }
}