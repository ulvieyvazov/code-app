import {React} from "react";

const Main = ()=>{
    const styles = {
        container:{
            width: "100%",
            margin: "0 0 60px 0"
        },
        image:{
            width: "20%",
            margin: "0 auto",
        },
        text:{
            width: "30%",
            textAlign: "center",
            margin: "0 auto",
        },
        h2:{
            fontSize: "30px"
        }
        
    }

    return(
        <div className="container" style={styles.container}>
            <div className="image" style={styles.image}>
                <img src="https://sb-ui-kit-pro-vue.startbootstrap.com/assets/img/avataaars.svg" alt="" />
            </div>

            <div className="text" style={styles.text}>
                <h2 className="h2" style={styles.h2}>Welcome to my portfolio!</h2>
                <p>I am a graphic artist, illustrator, and UI designer specializing in modern, creative design based in Wildemount, TX</p>
            </div>
        </div>
    )
}

export default Main