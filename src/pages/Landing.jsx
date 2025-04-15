import Navbar from "../components/Navbar"
import Cover from "../components/Cover"
import AboutPT from "../components/AboutPT"
import AboutUs from "../components/AboutUs"
import Brand from "../components/Brand"
import Footer from "../components/Footer"

export default function Landing(){
    return(
        <>
            <Navbar />
            <Cover />
            <AboutPT />
            <AboutUs />
            {/* <Brand /> */}
            <Footer />
        </>
    );
}