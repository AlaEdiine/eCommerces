import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react'
import { ShopContext } from '../../ShopContext/Shopcontext';

const FilterByPrice = () => {
    const { setMin, setMax , Filterprice, loading } = useContext(ShopContext);

    // calc sum TT
    const sumByPrice = (Filterprice.reduce((n, {count}) => n + count, 0));
  return (
    <div>
              <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by price</span>
          </h5>
          {!loading && Filterprice.length > 0 ? (
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  defaultChecked={true}
                  id="price-all"
                  onChange={(e) => setMin(0) & setMax(999)}
                />
                <label className="custom-control-label" htmlFor="price-all">
                  All Price
                </label>
                <span className="badge border font-weight-normal">{sumByPrice}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  id="100"
                  onChange={(e) => setMin(0) & setMax(100)}
                />
                <label className="custom-control-label" htmlFor="100">
                  $0 - $100
                </label>
                <span className="badge border font-weight-normal">{Filterprice[0].count}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  id="200"
                  onChange={(e) => setMin(101) & setMax(200)}
                />
                <label className="custom-control-label" htmlFor="200">
                  $101 - $200
                </label>
                <span className="badge border font-weight-normal">{Filterprice[1].count}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  id="300"
                  onChange={(e) => setMin(201) & setMax(300)}
                />
                <label className="custom-control-label" htmlFor="300">
                  $201 - $300
                </label>
                <span className="badge border font-weight-normal">{Filterprice[2].count}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  id="400"
                  onChange={(e) => setMin(301) & setMax(400)}
                />
                <label className="custom-control-label" htmlFor="400">
                  $301 - $400
                </label>
                <span className="badge border font-weight-normal">{Filterprice[3].count}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="radio"
                  name="price"
                  className="custom-control-input"
                  id="500"
                  onChange={(e) => setMin(401) & setMax(500)}
                />
                <label className="custom-control-label" htmlFor="500">
                  $401 - $500
                </label>
                <span className="badge border font-weight-normal">{Filterprice[4].count}</span>
              </div>
            </form>
          </div>
               ):
                <CircularProgress />}
    </div>
  )
}

export default FilterByPrice