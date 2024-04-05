import { Link } from "react-router-dom"


const Offer = () => {
  return (
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="https://img.freepik.com/photos-premium/deux-haut-parleurs-generative-ai_220873-24633.jpg" alt="offer-1" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Speakers</h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="https://www.fredzone.org/wp-content/uploads/2022/10/clavier_gaming_meilleurs_top.png" alt="offer-2" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Wireless Gaming Keyboards </h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer