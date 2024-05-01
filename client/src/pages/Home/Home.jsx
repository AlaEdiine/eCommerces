import { SnackbarProvider } from "notistack";
import Carousel from "../../component/Carousel/Carousel";
import Featured from "../../component/Featured/Featured";
import Categories from "../../component/Categories/Categories";
import Offer from "../../component/Offer/Offer";
import FeaturedProducts from "../../component/FeaturedProducts/FeaturedProducts";
import RecentProducts from "../../component/RecentProducts/RecentProducts";
import { useEffect } from "react";

const Home = () => {
  useEffect(() =>{
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <SnackbarProvider autoHideDuration={2500} />


      {/* Carousel Start */}
      <div className="container-fluid mb-3">
        <Carousel />
      </div>
      {/* Carousel End */}


      {/* Featured Start */}
      <div className="container-fluid pt-5">
        <Featured />
      </div>
      {/* Featured End */}


      {/* Categories Start */}
      <div className="container-fluid pt-5">
        <Categories />
      </div>
      {/* Categories End */}


      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <FeaturedProducts />
      </div>
      {/* Products End */}


      {/* Offer Start */}
      <div className="container-fluid pt-5 pb-3">
        <Offer />
      </div>
      {/* Offer End */}


      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <RecentProducts />
      </div>
      {/* Products End */}


    </div>
  );
};

export default Home;
