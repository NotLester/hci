const router = require("express").Router();
const Product = require("../models/product");

router.route("/add").post((req,res)=>{

 const productname = req.body.productname;
 const unitprice = Number(req.body.unitprice);
 const sellername = req.body.sellername;
 const contactno = Number(req.body.contactno);
 const description = req.body.description;
//  const image = Image(req.body.image);


 const newProduct = new Product({

    productname,
    unitprice,
    sellername,
    contactno,
    description,
    // image

 })

  newProduct.save().then(()=>{
     res.json("Product Added")
  }).catch((error)=>{
    console.log(error);
  })

})


router.route("/").get((req,res)=>{

    Product.find().then((products)=>{
        res.json(products)
    }).catch((error)=>{
        console.log(error)
    })
 
})


router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const{productname,unitprice,sellername,contactno,description,image} = req.body;

    const updateProduct = {
        productname,
        unitprice,
        sellername,
        contactno,
        description,
        image
    
    }

    const update = await Product.findByIdAndUpdate(userId,updateProduct)
    .then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500).send({status:"Error with updating",error: error.message}); 
    })

   
})

router.route("/delete/:id").delete(async(req,res) => {
  let userId = req.params.id;

  await Product.findByIdAndDelete(userId)
  .then(() => {
    res.status(200).send({status: "Userdeleted"});
  }).catch((error) => {
    console.log(error.message);
    res.status(500).send({status: "Error with delete",error:error.message});
  })
})

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
   const user = await Product.findById(userId)
    .then((product) => {
       res.status(200).send({status: "User fetched",product})
    }).catch(() => {
        console.log(error.message);
        res.status(500).send({status: "Error with get details",error:error.message});
    })
})

module.exports = router;