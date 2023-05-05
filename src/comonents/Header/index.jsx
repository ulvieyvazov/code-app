import { React } from "react";

const Header = () => {

    const styles = {
        container: {
            width: "100%",
            display: "flex",
            // justifyContent: 'space-around',
            margin: "0 auto",
            gap: "180px",
            margin: "0 0 120px 0",
        },
        nav: {
            display: "flex",
            alignItems: "center"
        },
        list: {
            display: "flex",
            listStyle: "none",
            gap: "50px",
            margin: "25px 70px",
            color: "gray"
        },


        btn: {
            margin: "0 80px 0 0"
        },
        button: {
            padding: "10px 18px",
            margin: "15px 0",
            backgroundColor: "aqua",
            border: "0",
            borderRadius: "12px",
            fontSize: "large",
        }

    }


    return (
        <>
            <div className="container" style={styles.container}>

                <div className="sb">
                    <h1>SB UI Kit Pro</h1>
                </div>

                <div className="nav">
                    <ul className="list" style={styles.list}>
                        <li>Home</li>
                        <li>Landings</li>
                        <li>Pages</li>
                        <li>Documentation</li>
                    </ul>

                </div>
                    <div className="btn" style={styles.btn}>
                        <button className="button" style={styles.button} >BUY NOW</button>
                    </div>
            </div>
        </>
    )
}

export default Header;