import AliPhoto from "../assets/image/photo/Frame 24.png"
import DudiPhoto from "../assets/image/photo/Frame 23.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="title">
                <h2><span className="dewan">Dewan</span> <span>Komisaris</span> dan <span>Direksi</span></h2>
            </div>
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={DudiPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Dudi Supiandi</h4>
                        <h5>Komisaris Utama</h5>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={AliPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Ali Sadikin</h4>
                        <h5>Direktur Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}