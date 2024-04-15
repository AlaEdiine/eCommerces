import { CircularProgress } from '@mui/material';
import React, { useContext } from 'react'
import { ShopContext } from '../../ShopContext/Shopcontext';

const FilterByColor = () => {
    const { setColor, Filtercolor, loading } = useContext(ShopContext);
// calc sum TT
const sumByColor = (Filtercolor.reduce((n, {count}) => n + count, 0));

    
  return (
    <div>
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by color</span>
            </h5>
           {!loading && Filtercolor.length > 0 ? (
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  defaultChecked
                  id="allColor"
                  onChange={(e) => setColor(null)}
                />
                <label className="custom-control-label" htmlFor="allColor">
                  All color
                </label>
                <span className="badge border font-weight-normal">{sumByColor}</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  id="black"
                  onChange={(e) => setColor(e.target.id)}
                />
                <label className="custom-control-label" htmlFor="black">
                  Black
                </label>
                <span className="badge border font-weight-normal">
                  {Filtercolor[0].count}
                </span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  id="white"
                  onChange={(e) => setColor(e.target.id)}
                />
                <label className="custom-control-label" htmlFor="white">
                  White
                </label>
                <span className="badge border font-weight-normal">
                  {Filtercolor[1].count}
                </span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  id="red"
                  onChange={(e) => setColor(e.target.id)}
                />
                <label className="custom-control-label" htmlFor="red">
                  Red
                </label>
                <span className="badge border font-weight-normal">
                  {Filtercolor[2].count}
                </span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  id="blue"
                  onChange={(e) => setColor(e.target.id)}
                />
                <label className="custom-control-label" htmlFor="blue">
                  Blue
                </label>
                <span className="badge border font-weight-normal">
                  {Filtercolor[3].count}
                </span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="radio"
                  name="color"
                  className="custom-control-input"
                  id="green"
                  onChange={(e) => setColor(e.target.id)}
                />
                <label className="custom-control-label" htmlFor="green">
                  Green
                </label>
                <span className="badge border font-weight-normal">
                  {Filtercolor[4].count}
                </span>
              </div>
            </form>
          </div>
           ):
           <CircularProgress />}
    </div>
  )
}

export default FilterByColor