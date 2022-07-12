import React from "react";
import '../productPreview/productPreview.css';
import BerryData from "../Data.json";
import { useGlobalContext } from '../modal/context';


const ProductWhole = () => {
    const { openModal } = useGlobalContext();
  return (
    <div className="container product-preview">
        <h3>VISI PRODUKTAI</h3>
        <div className="double-line"></div>
        <div className="cards row">
        {BerryData.map((item)=>
            <div className="col-xl-4">
                <div className="card">
                    <img src={item.img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <div className="card-title">{item.title}</div>
                        <div className="card-text"><p>{item.price}</p></div>
                    </div>
                </div>
            </div>
            )}
        </div>
        <div className="d-flex justify-content-center py-4">
            <button onClick={openModal} className='btn'>
            PATEIK UŽSAKYMĄ
            </button>
        </div>
    </div>
  )
};

export default ProductWhole;