import { useState } from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";
import AdidasNMD from "../Images/adidas_nmd.svg";
import Adidas from "../Images/adidas.svg";
import AirForceOnes from "../Images/AF1.svg";
import Converse from "../Images/converse-final.svg";
import JordanOnes from "../Images/laces2023.svg";
import Pumas from "../Images/puma.svg";
import Timberlands from "../Images/timb.svg";
import Uggs from "../Images/ugg.svg";
import Vans from "../Images/vans.svg";
import CustomizeShoe from "./CustomizeShoe";

export default function Catalog() {
  const shoeData = {
    shoeName: "Adidas NMD",
    price: 185.0,
    shoeImage: AdidasNMD,
  };

  return (
    <div>
      <h2>Shoe Catalog</h2>
      <div className="shoes">
        <div className="shoe shoeOne">
          <img
            src={AdidasNMD}
            alt="AdidasNMD shoe design"
            className="shoeImage"
          />
          <p className="shoeName">Adidas NMD</p>
          <p className="shoePrice">$185.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Adidas NMD",
              price: 185.0,
              shoeImage: "AdidasNMD",
              color: "lightGrey",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeTwo">
          <img src={Adidas} alt="Adidas shoe design" className="shoeImage" />
          <p className="shoeName">Adidas</p>
          <p className="shoePrice">$110.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Adidas",
              price: 110.0,
              shoeImage: "Adidas",
              color: "royalblue",
            }}
          >
            {/* data: shoeData */}
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeThree">
          <img src={Vans} alt="Vans shoe design" className="shoeImage" />
          <p className="shoeName">Vans</p>
          <p className="shoePrice">$75.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Vans",
              price: 75.0,
              shoeImage: "Vans",
              color: "black",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeFour">
          <img
            src={Converse}
            alt="Converse shoe design"
            className="shoeImage"
          />
          <p className="shoeName">Converses</p>
          <p className="shoePrice">$120.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Converses",
              price: 120.0,
              shoeImage: "Converses",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeFive">
          <img
            src={JordanOnes}
            alt="Jordan Ones shoe design"
            className="shoeImage"
          />
          <p className="shoeName">Jordan Ones</p>
          <p className="shoePrice">$175.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Jordan 1's",
              price: 175.0,
              shoeImage: "JordanOnes",
              color: "#9DA213",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
      </div>
      <div className="shoesTwo">
        <div className="shoe shoeOne">
          <img src={Pumas} alt="Pumas shoe design" className="shoeImage" />
          <p>Pumas</p>
          <p className="shoePrice">$95.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Pumas",
              price: 95.0,
              shoeImage: "Pumas",
              color: "black",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeTwo">
          <img
            src={Timberlands}
            alt="Timberlands shoe design"
            className="shoeImage"
          />
          <p className="shoeName">Timberlands</p>
          <p className="shoePrice">$140.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Timberlands",
              price: 140.0,
              shoeImage: "Timberlands",
              color: "brown",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeThree">
          <img src={Uggs} alt="uggs shoe design" className="shoeImage" />
          <p className="shoeName">Uggs</p>
          <p className="shoePrice">$95.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Uggs",
              price: 95.0,
              shoeImage: "Uggs",
              color: "magenta",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
        <div className="shoe shoeFour">
          <img
            src={AirForceOnes}
            alt="Air Force 1 shoe design"
            className="shoeImage"
          />
          <p className="shoeName">Air Force Ones</p>
          <p className="shoePrice">$115.00</p>
          <Link
            to={"/CustomizeShoe"}
            state={{
              shoeName: "Air Force Ones",
              price: 115.0,
              shoeImage: "AirForceOnes",
              color: "gray",
            }}
          >
            <button className="customizeShoe">Customize Shoe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
