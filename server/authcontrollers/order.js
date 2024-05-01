const { ORDER } = require("../Models/order");
const { createError } = require("../Service/Error");

//TODO: AJOUTER PRODUIT
module.exports.ADD_ORDER = async (req, res , next) => {
  try{
  
    const Day = new Date();

    const obj = {
      Status : "In Progress",
      Date : Day.toUTCString()
    }
    const TTObj = Object.assign(obj , req.body.dataOrder)
     const result = await ORDER.insertMany(TTObj , async (err,docs)=>{
      if (err) throw err
      const dataID = docs[0]._id
  
      return res.status(200).send(dataID)
         });
  }
    catch (err){
      return  next(err)
    }
  }

//TODO: UPDATE PRODUIT
module.exports.UPDATE_PRODUIT = async (req, res , next) => {
  try{
  const result = await PRODUIT.findByIdAndUpdate(req.params.id , {$set : req.body} , {new : true});
  if (!result) return next(createError(401, 'Error Search'))
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}

//TODO: DELETE PRODUIT
module.exports.DELETE_PRODUIT = async (req, res , next) => {
    try{
    const result = await PRODUIT.findByIdAndDelete({ _id : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send('Succes deleted ouvrier')
  }
    catch (err){
      return  next(err)
    }
  }
  
//TODO: GET PRODUIT
module.exports.GET_PRODUIT = async (req, res , next) => {
    try{
    const result = await PRODUIT.findOne({ _id : req.params.id });
    const history = await PRODUITHISTORY.find({ PrimaryKeyProduct : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send({result,history})
  }
    catch (err){
      return  next(err)
    }
}
  
  
//TODO: GET ALL PRODUIT
module.exports.GET_ALL_ORDER = async (req, res , next) => {
    try{
    const result = await ORDER.find({userId : req.infoUser.id});
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send(result)
  }
    catch (err){
      return  next(err)
    }
}
  