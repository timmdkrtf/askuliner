import RhamdaniPhoto from "../assets/image/photo/bg1.png"
import DudiPhoto from "../assets/image/photo/bg1 (1).png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={DudiPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Dudi</h4>
                        <h5>Dewan Komisaris</h5>
                    </div>
                </div>
                <div className="content-center">
                    <div className="title">
                        <h2>
                            Dewan Komisaris
                            <br/>
                            <span>&</span>
                            <br/>
                            Direksi Utama
                        </h2>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={RhamdaniPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Rhamdani</h4>
                        <h5>Direksi Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}