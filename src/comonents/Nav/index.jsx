import { React, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillFacebook } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { AiFillTwitterCircle } from "react-icons/ai";

const Nav = () => {


  const [data , setData] = useState([])
  
  const getData = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    setData(res.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  console.log(data);
  return (

    <div className="a">
      {
        data
        .filter(f => (f.id < 5))
        .map((d)=>(
          <div className="b">
            <img src={d.image} alt="" />
            <p>catagory: {d.category}</p>
            <p>Price: {d.price}</p>
          </div>
        ))
      }
    </div>

    // <div className="footer-container">
    //   <div className="svg">
        
    //   </div>
    //   <div className="top">
    //     <div className="pro">
    //       <h3>SB UI Kit Pro</h3>
    //       <p>Build better websites</p>
    //       <div className="icons">
    //         <AiFillInstagram/>
    //         <AiFillFacebook/>
    //         <AiFillGithub/>
    //         <AiFillTwitterCircle/>
    //       </div>
    //     </div>

    //     <div className="product">
    //       <ul>
    //       <h3>PRODUCT</h3>
    //         <li>Landing</li>
    //         <li>Pages</li>
    //         <li>Sections</li>
    //         <li>Documentation</li>
    //         <li>Changelog</li>
    //       </ul>
    //     </div>

    //     <div className="technical">
    //     <ul>
    //       <h3>TECHNICAL</h3>
    //         <li>Documentation</li>
    //         <li>Changelog</li>
    //         <li>Theme Customizer</li>
    //         <li>UI Kit</li>
    //       </ul>
    //     </div>


    //     <div className="includes">
    //     <ul>
    //       <h3>INCLUDES</h3>
    //         <li>Utilities</li>
    //         <li>Components</li>
    //         <li>Layouts</li>
    //         <li>Code Samples</li>
    //         <li>Products</li>
    //         <li>Affiliates</li>
    //         <li>Updates</li>
    //       </ul>
    //     </div>


    //     <div className="legal">
    //     <ul>
    //       <h3>LEGAL</h3>
    //         <li>Privacy Policy</li>
    //         <li>Terms and Conditions</li>
    //         <li>License</li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="bottom"></div>
    // </div>
  );
};
export default Nav;