import askLogo from "../assets/image/logo/ask-main-p.png"
import { useState, useEffect } from "react";
import Room1 from "../assets/image/bg/4.png"
import Room2 from "../assets/image/bg/2.png"
import Room3 from "../assets/image/bg/3.png"

const images = [Room1, Room2, Room3];

export default function Cover(){

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="cover" className={`cover ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="content-container">
                <div className="content">
                    <img src={askLogo} alt="" />
                    <p>PT Abdi Saji Kuliner</p>
                </div>
            </div>
        </div>
    );
}