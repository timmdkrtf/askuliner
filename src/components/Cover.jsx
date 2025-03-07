import askLogo from "../assets/image/logo/ask-main-p.png"

export default function Cover(){
    return(
        <div className="cover" id="cover">
            <div className="content-container">
                <div className="content">
                    <img src={askLogo} alt="" />
                    <p>PT Abdi Saji Kuliner</p>
                </div>
            </div>
        </div>
    );
}