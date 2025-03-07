import LogoMain from "../assets/image/logo/ask-main-p.png"
import { useState, useEffect } from "react";

export default function Navbar(){

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const coverHeight = document.getElementById("cover")?.offsetHeight || 0;
            if (window.scrollY > coverHeight) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <nav className={`navbar navbar-expand-lg fixed-top ${showNavbar ? "show" : "hide"}`}>
            <div className="container">
                <a className="navbar-brand" href="#"><img src={LogoMain} alt="" /></a>
            </div>
        </nav>
        </>
    );
}