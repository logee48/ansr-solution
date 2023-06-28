const mongo = require('mongoose')

const products = mongo.Schema(
    {
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
    }
)

const product = mongo.model("product",products)
module.exports = product;