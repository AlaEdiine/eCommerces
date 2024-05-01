const { PRODUCTE } = require("../Models/product");
const { createError } = require("../Service/Error");
  
//TODO: GET ALL PRODUCT
module.exports.GET_ALL = async (req, res , next) => {
    try{
    const result = await PRODUCTE.find();
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send(result)
  }
    catch (err){
      return  next(err)
    }
}

//TODO: UPDATE PRODUCT
module.exports.UPDATE_PRODUCT = async (req, res, next) => {
  const newComment = {
    userId: req.infoUser.id ,
  commentaires : req.body.comment,
  race : req.body.value, 
  }
  try {
    const result = await PRODUCTE.findByIdAndUpdate(
      req.params.id,
      { $push: {Comment  : newComment } },
      { new: true }
    ).select("-Password").populate('Comment.userId' , 'FirstName LastName Email Photo');
    if (!result) return next(createError(401, "User not found"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};


//TODO: GET  PRODUCT
module.exports.GET_PRODUCT = async (req, res , next) => {
  try{
  const result = await PRODUCTE.findById(req.params.id).populate('Comment.userId' , 'FirstName LastName Email Photo');
  if (!result) return next(createError(401, 'Error Search'))
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}



//TODO: GET  COUNT_BY_COLOR
module.exports.COUNT_BY_COLOR  = async (req, res , next) => {
  try{
    const BlackColorCount = await PRODUCTE.countDocuments({color : "black"}) 
    const WhiteColorCount = await PRODUCTE.countDocuments({color: "white"}) 
    const RedColorCount = await PRODUCTE.countDocuments({color: "red"}) 
    const BlueColorCount = await PRODUCTE.countDocuments({color: "blue"}) 
    const GreenColorCount = await PRODUCTE.countDocuments({color: "green"}) 
    
  return res.status(200).json([
    { color : "black" , count: BlackColorCount },
    { color : "white" , count: WhiteColorCount },
    { color : "red" , count: RedColorCount },
    { color : "blue" , count: BlueColorCount },
    { color : "green" , count: GreenColorCount },
  ])
}
  catch (err){
    return  next(err)
  }

}


//TODO: GET  COUNT_BY_PRICE
module.exports.COUNT_BY_PRICE  = async (req, res , next) => {
  try{
    const Price_0_100 = await PRODUCTE.countDocuments({price : {$gt : 0 , $lt:100}}) 
    const Price_101_200 = await PRODUCTE.countDocuments({price : {$gt : 101 , $lt:200}}) 
    const Price_201_300 = await PRODUCTE.countDocuments({price : {$gt : 201 , $lt:300}}) 
    const Price_301_400 = await PRODUCTE.countDocuments({price : {$gt : 301 , $lt:400}}) 
    const Price_401_500 = await PRODUCTE.countDocuments({price : {$gt : 401 , $lt:500}}) 
 
  return res.status(200).json([
    { count: Price_0_100 },
    { count: Price_101_200 },
    { count: Price_201_300 },
    { count: Price_301_400 },
    { count: Price_401_500 },
  ])
}
  catch (err){
    return  next(err)
  }
}
  

//TODO: GET  COUNT_BY_BRAND
module.exports.COUNT_BY_BRAND  = async (req, res , next) => {
  const brand = req.query.brand.split(",")
  try{
    const list = await Promise.all(brand.map(elem =>{
      return PRODUCTE.countDocuments({brand : elem})
    }))
   res.status(200).json(list)
}
  catch (err){
    return  next(err)
  }
}
  