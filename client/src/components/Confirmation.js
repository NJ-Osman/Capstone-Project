import "./Confirmation.css";
import { Link } from "react-router-dom";
import CustomizeShoe from "./CustomizeShoe";

export default function Confirmation() {
  return (
    <div className="form">
      <div className="formHandle">
      <h2>Thank You!</h2>
      <h3>A confirmation as been sent to your email.</h3>
      <h3>The shoes will be delivered soon.</h3>
      <Link to={"/"}><button class="prevPage">Previous Page</button></Link>
      </div>
    </div>
  );
}
