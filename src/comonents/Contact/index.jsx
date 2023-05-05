import { React } from "react";
import { index } from "./index.css";

const Contact = () => {
  const styles = {
    container: {
      width: "30%",
      margin: "0 auto",
      textAlign: "center",
    },
    cart: {
      width: "45%",
      height: "120px",
      backgroundColor: "blue",
    },
    child: {
      margin: "50px",
    },

    parent: {
      display: "flex",
      gap: "30px",
      margin: "50px 0"
    },
    bol: {
      width: "50px",
      height: "50px",
      backgroundColor: "orange",
      margin: "0 auto",
      borderRadius: "50%",
    },
  };

  return (
    <div className="container" style={styles.container}>
      <h3>Contact me</h3>
      <p>I am available for contract work, when you're ready - let me know!</p>

      <div className="parent" style={styles.parent}>
        <div className="cart" style={styles.cart}>
          <div className="child" style={styles.child}>
            <div className="bol" style={styles.bol}></div>
            <a href="">hello@example.com</a>
          </div>
        </div>

        <div className="cart" style={styles.cart}>
          <div className="child" style={styles.child}>
            <div className="bol" style={styles.bol}></div>
            <span>555-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
