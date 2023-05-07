import { React } from "react";
import "./footer.css";

const Footer = () => {

    const styles = {
        container: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap"
        },
        cart: {
            padding: "52px",
            width: "15%",
            textAlign: "center",
            margin: "0 auto",
        },
        icon1: {
            margin: "0 50px",
            // position: 'relative',
            width: '80px',
            height: '80px',
            backgroundColor: "red",
            borderRadius: "50%",
        },
        icon2: {
            margin: "0 50px",
            // position: 'relative',
            width: '80px',
            height: '80px',
            backgroundColor: "#f4a100",
            borderRadius: "50%",
        },
        icon3: {
            margin: "0 50px",
            // position: 'relative',
            width: '80px',
            height: '80px',
            backgroundColor: "#0061f2",
            borderRadius: "50%",
        },
        icn: {
            // position: 'absolute',
            margin: '30px',
            position: 'apsolute',
            color: "white",
            fontSize: "24px"
        }
    }

    return (
        <div className="container" style={styles.container}>
            <div className="cart" style={styles.cart}>
                <div className="icon icon1" style={styles.icon1}>
                    <i class="fa-sharp fa-solid fa-pen icn" style={styles.icn}></i>
                </div>
                <h3>Illustration</h3>
                <p>I provide custom illustration services for contract clients</p>
            </div>
            <div className="cart" style={styles.cart}>
                <div className="icon icon2" style={styles.icon2}>
                    <i class="fa-solid fa-bookmark" style={styles.icn}></i>
                </div>
                <h3>UI Design</h3>
                <p>User experience and interface designs is one of my specialties</p>
            </div>
            <div className="cart" style={styles.cart}>
                <div className="icon icon3" style={styles.icon3}>
                    <i class="fa-solid fa-droplet" style={styles.icn}></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Photo restoration, post processing, and other photo services</p>
            </div>
        </div>
    )
}

export default Footer