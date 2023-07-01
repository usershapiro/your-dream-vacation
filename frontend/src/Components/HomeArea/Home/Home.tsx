import "./Home.css";
import vacpic1 from "../../../Assests/images/christmas-3864552_640.webp"
import vacpic2 from "../../../Assests/images/beach-1761410_1280.jpg"
import vacpic3 from "../../../Assests/images/beach-5182349_640.jpg"
import vacpic4 from "../../../Assests/images/desert-3217765_640.jpg"
import vacpic5 from "../../../Assests/images/venice-4286696_640.jpg"
import vacpic6 from "../../../Assests/images/funes-4984899_640.jpg"
import vacpic7 from "../../../Assests/images/seychelles-4916045_640.jpg"
import vacpic8 from "../../../Assests/images/grand-canal-1933559_640.jpg"
import vacpic9 from "../../../Assests/images/wadi-rum-5079834_640.jpg"
import vacpic10 from "../../../Assests/images/hamburg-3071437_640.jpg"
import travel from "../../../Assests/images/526433595plane-travel-animated-gif-25.gif"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function Home(): JSX.Element {
    const navigate = useNavigate();
    const images = [ vacpic1 , vacpic2 , vacpic3 , vacpic4 , vacpic5 ,vacpic6 ,vacpic7 ,vacpic8 ,vacpic9,vacpic10];

    
    const [currentImage, setCurrentImage] = useState(null);

 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])
     
    return (
        <div className="Home">
		        
           {currentImage &&<><img src={currentImage} />	
                <h2>Your Dream  Vacation Starts Here!!</h2>
                <Button color="secondary" variant="contained" size="large"  onClick={() => {
    navigate("/register")
  }}>Start Your Dream !</Button></>}
  
                 {!currentImage && <>
                    <img src={travel} />	
                <h2>Your Dream  Vacation Starts Here!!</h2>
                <Button color="secondary" variant="contained" size="large"  onClick={() => {
    navigate("/register")
  }}>Start Your Dream !</Button>
            </>}
        </div>
    );
}

export default Home;
