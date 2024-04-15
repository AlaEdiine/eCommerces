import { CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../../ShopContext/Shopcontext";

const FilterByBrand = () => {
  const { setBrand, loading , Filterbrand } = useContext(ShopContext);

  // calc sum TT
  const sumByBrand = Filterbrand.reduce((e, n) => e + n, 0);

  return (
    <div>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by Brand</span>
      </h5>
      {!loading && Filterbrand.length > 0 ? (
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                defaultChecked
                id="all-brand"
                onChange={(e) => setBrand(null)}
              />
              <label className="custom-control-label" htmlFor="all-brand">
                All Brand
              </label>
              <span className="badge border font-weight-normal">
                {sumByBrand}
              </span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                id="Apple"
                onChange={(e) => setBrand(e.target.id)}
              />
              <label className="custom-control-label" htmlFor="Apple">
                Apple
              </label>
              <span className="badge border font-weight-normal">{Filterbrand[0]}</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                id="Laptop"
                onChange={(e) => setBrand(e.target.id)}
              />
              <label className="custom-control-label" htmlFor="Laptop">
                Laptop
              </label>
              <span className="badge border font-weight-normal">{Filterbrand[1]}</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                id="MacBook"
                onChange={(e) => setBrand(e.target.id)}
              />
              <label className="custom-control-label" htmlFor="MacBook">
                MacBook
              </label>
              <span className="badge border font-weight-normal">{Filterbrand[2]}</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                id="Samsung"
                onChange={(e) => setBrand(e.target.id)}
              />
              <label className="custom-control-label" htmlFor="Samsung">
                Samsung
              </label>
              <span className="badge border font-weight-normal">{Filterbrand[3]}</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="radio"
                name="brand"
                className="custom-control-input"
                id="MiniPhone"
                onChange={(e) => setBrand(e.target.id)}
              />
              <label className="custom-control-label" htmlFor="MiniPhone">
                Mini Phone
              </label>
              <span className="badge border font-weight-normal">{Filterbrand[4]}</span>
            </div>
          </form>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default FilterByBrand;
