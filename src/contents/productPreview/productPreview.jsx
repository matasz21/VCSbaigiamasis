import React from "react";
import './productPreview.css';
import BerryData from "./Data.json";
import { useGlobalContext } from '../modal/context';
import { Link } from 'react-router-dom';



const ProductPreview = () => {
    const { openModal } = useGlobalContext();
  return (
    <div className="container product-preview">
        <h3>POPULIARIAUSI PRODUKTAI</h3>
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
            <Link to="./products"><button  className='btn mx-2'>
            VISAS ASORTIMENTAS
            </button></Link>
            <button onClick={openModal} className='btn mx-2'>
            PATEIK UŽSAKYMĄ
            </button>
        </div>
    </div>
  )
};

export default ProductPreview;
