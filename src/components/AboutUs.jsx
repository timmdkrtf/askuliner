import RhamdaniPhoto from "../assets/image/photo/Frame 21.png"
import DudiPhoto from "../assets/image/photo/Frame 16.png"

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
                        <img src={RhamdaniPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Andri Rhamdani</h4>
                        <h5>Direktur Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}