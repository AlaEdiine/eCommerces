import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: 430}}>
              <img className="position-absolute w-100 h-100"   src="https://www.pctipp.ch/img/1/6/9/7/4/1/2/Aufmacher_w580_h385.jpg" alt='catousel' style={{objectFit: 'cover'}}  />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Apple MacBook</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Apple 2023 MacBook Pro Laptop  Apple M2 Pro chip, 12‑core CPU and 19‑core GPU: 16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 1TB SSD Storage.</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >
                    Shop Now
                    </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="https://m.media-amazon.com/images/I/81xeH3po6aL._AC_UF1000,1000_QL80_.jpg" alt="carousel2" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">HP Pavilion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Intel Core i5-1155G7 FHD, 16GB DDR4 - 512GB SSD Intel Iris Xe Graphics 430 Multi-Device Bluetooth Wireless Mouse with 4 Programmable Buttons/ 800 DPI - 4000 DPI/</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="https://m-cdn.phonearena.com/images/review/5517-wide-two_1200/iPhone-14-Plus-review-Finally-a-big-iPhone-without-the-Pro-Max-tax.jpg" alt="img" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">IPhone 14 Pro Max</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Apple IPhone 14 Plus review: <br /> Finally, a big iPhone without the Pro Max tax</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/iphone14proproductshots-1-10.jpeg" alt="offer-1" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <Link to='/products'  className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="https://pic.clubic.com/v1/images/1921366/raw" alt="offer-2" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel