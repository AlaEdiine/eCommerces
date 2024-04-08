const { ORDER } = require("../Models/order");

const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)

//TODO: payment
module.exports.payment = async (req, res) => {
  const products = req.body.carts
  try{
    const lineitems = products.map((pro)=>({
      price_data:{
        currency:"USD",
        product_data:{
          name: pro.name,
        },
        unit_amount: pro.price * 100,
      },
      quantity : pro.Qte
    }))
    const Day = new Date();
    const newOrder = new ORDER({
      userId: req.infoUser.id,
      Status : "In Progress",
      Date : Day.toUTCString(),
      listProduct : products,
      SumTT : req.body.sumTT
    })
    await newOrder.save()
  
  const session = await stripe.checkout.sessions.create({
      payment_method_types : ['card'],
      line_items: lineitems,
      mode:"payment",
      success_url: 'https://client-57od.onrender.com/sucess',
      cancel_url:'https://client-57od.onrender.com/cancel'
    })
    res.json({url:session.url})
  } catch (error){
res.status(500).json({error:error.message})
  }
 
  
  }
