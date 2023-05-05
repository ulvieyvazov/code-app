import { React } from "react";
import "./style.css";
import { AiFillInstagram } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="pro">
          <h3>SB UI Kit Pro</h3>
          <p>Build better websites</p>
          <div className="icons">
            <AiFillInstagram/>
          </div>
        </div>

        <div className="product">
          <ul>
          <h3>Product</h3>
            <li>Landing</li>
            <li>Pages</li>
            <li>Sections</li>
            <li>Documentation</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};
export default Nav;
