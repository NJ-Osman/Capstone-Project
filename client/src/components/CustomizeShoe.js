import React, { useState } from "react";
import "./CustomizeShoe.css";
import { useLocation } from "react-router-dom";
import { ChromePicker } from "react-color";
// import { ReactComponent as AdidasNMD } from '../Images/adidas_nmd.svg'
import AddidasNMD from "./shoes/AddidasNMD";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";
import Confirmation from "./Confirmation";
import App from "../App";
import Adidas from "./shoes/Adidas";
import AirForceOnes from "./shoes/AirForceOnes";
import Converses from "./shoes/Converses";
import JordanOnes from "./shoes/JordanOnes";
import Pumas from "./shoes/Pumas";
import Timberlands from "./shoes/Timberlands";
import Uggs from "./shoes/Uggs";
import Vans from "./shoes/Vans";

export default function CustomizeShoe(props) {
  const location = useLocation();
  const { state } = location;
// const shoeImage = state.shoeImage;
const shoeName = state.shoeName;
const price = state.price
const shoeColor = state.color
const shoeImage = state.shoeImage
  const [selectedColor, setSelectedColor] = useState(shoeColor);

   const handleColorChange = (color) => {
     setSelectedColor(color.hex);
   };

   console.log('props', state )
  return (
    <div>
      <h1 className="customizeTitle">Customize Shoe</h1>
      <div>
        <Link to={"/"}>
          <button className="backBtn">Go Back</button>
        </Link>
      </div>
      <h2>{shoeName}</h2>
      <div className="shoeContainer">
        <div className="shoeDetails">
          {shoeImage == "AdidasNMD" && <AddidasNMD fillColor={selectedColor} />}
          {shoeImage == "Adidas" && <Adidas fillColor={selectedColor} className="shoeSVG" />}
          {shoeImage == "AirForceOnes" && (
            <AirForceOnes fillColor={selectedColor} />
          )}
          {shoeImage == "Converses" && <Converses fillColor={selectedColor} />}
          {shoeImage == "JordanOnes" && (
            <JordanOnes fillColor={selectedColor} />
          )}
          {shoeImage == "Pumas" && <Pumas fillColor={selectedColor} />}
          {shoeImage == "Timberlands" && (
            <Timberlands fillColor={selectedColor} />
          )}
          {shoeImage == "Uggs" && <Uggs fillColor={selectedColor} />}
          {shoeImage == "Vans" && <Vans fillColor={selectedColor} />}
          <h3>Price: ${price}</h3>

          <Link to={"/Confirmation"}>
            <button className="buyShoe">Buy Shoe</button>
          </Link>
        </div>
        <div className="colorSelection">
          <h3>Choose Your Color</h3>
          <ChromePicker
            color={selectedColor}
            onChange={handleColorChange}
            className="colorPicker"
          />
        </div>
      </div>
    </div>
  );
}


//  const { shoeName, price } = props.location.state;