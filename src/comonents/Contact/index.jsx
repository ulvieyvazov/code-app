import { React } from "react";
import "./index.css";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";


const Contact = () => {
  const styles = {
    container: {
      padding: "50px 0",
      width: "100%",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#eff3f9",
    },
    cart: {
      width: "45%",
      height: "150px",
      backgroundColor: "white",
      borderRadius: "5px"
    },
    child: {
      margin: "40px",
      position: "relative",
    },

    parent: {
      width: "50%",
      display: "flex",
      gap: "30px",
      margin: "0 auto",
      padding: "20px 0"
    },
    bol1: {
      width: "50px",
      height: "50px",
      backgroundColor: "#f76400",
      margin: "0 auto",
      borderRadius: "50%",
      position: "relative",
    },
    bol2: {
      width: "50px",
      height: "50px",
      backgroundColor: "#00ac69",
      margin: "0 auto",
      borderRadius: "50%",

    },
    icon: {
      // display: "flex",
      // flexDirection: "column",
      position: "absolute",
      left: "100px",
      zIndex: "77",
      bottom: "-50px",
      color: "white",
      fontSize: "20px",
      margin: "0px 0 80px 0 "
    }
  };

  return (
    <div className="container" style={styles.container}>
      <h3>Contact me</h3>
      <p>I am available for contract work, when you're ready - let me know!</p>

      <div className="parent" style={styles.parent}>
        <div className="cart" style={styles.cart}>
          <div className="child" style={styles.child}>
            <div className="bol1" style={styles.bol1} ></div>
            <div className="icon" style={styles.icon}>
              <FaEnvelope />
            </div>
            <a href="">hello@example.com</a>
          </div>
        </div>

        <div className="cart" style={styles.cart}>
          <div className="child" style={styles.child}>
            <div className="bol1" style={styles.bol2}></div>
            <div className="icon" style={styles.icon}>
              <FaMobile />
            </div>
            <span>555-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
