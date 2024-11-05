const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema, model } = mongoose;


const productSchema = new Schema({

  productname : {
    type : String,
    required : true
  },

  unitprice : {
    type : Number,
    required : true
  },

  sellername : {
    type : String,
    required : true
  },

  contactno : {
    type : Number,
    required : true
  },

  description : {
    type : String,
    required : true
  },

  image : {
    type : Boolean,
 
  },

})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
