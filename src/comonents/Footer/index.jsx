import { React } from "react";
const Footer = () => {

    const styles = {
        container: {
            width: "100%",
            display: "flex",
        },
        cart: {
            width: "32%",
        },
        icon: {
            // position: 'relative',
            width: '80px',
            height: '80px',
            backgroundColor: "aqua",
            borderRadius: "50%",
        },
        icn: {
            // position: 'absolute',
            margin: '20px',
            position: 'apsolute',
            left: '90px'
        }
    }

    return (
        <div className="container" style={styles.container}>
            <div className="cart" style={styles.cart}>
                <div className="icon" style={styles.icon}>
                    
                    
                    <i class="fa-sharp fa-solid fa-pen icn"></i>
                </div>
                <h3>Illustration</h3>
                <p>I provide custom illustration services for contract clients</p>
            </div>
            <div className="cart">

            </div>
            <div className="cart">

            </div>
        </div>
    )
}

export default Footer