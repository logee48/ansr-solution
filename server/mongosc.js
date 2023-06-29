const mongo = require('mongoose')

const products = mongo.Schema(
    {
        "user":{type:String, required:true},
        "title":{
            type:String,
            //1parameter req or not
            //2nd message if it is false
            required:[true,"please enter name"]
        },
        "notes":{
            type:String,
            required:[true,"please enter age"]
        }
        // "user":String,
        // "data":[
        //     {
        //         "title":{type:String},
        //         "notes":{type:String}
        //     }
        // ]
    }
)

const product = mongo.model("product",products)
// const product = mongo.model("test",products)
module.exports = product;