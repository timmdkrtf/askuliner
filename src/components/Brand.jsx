import SajinariLogo from "../assets/image/logo/Logo Sajinari.png"

export default function Brand(){
    return(
        <div className="brand" id="brand">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2><span className="fst-italic">Brand</span> Kami</h2>
                    </div>
                    <div className="content">
                        <a href="https://sajinari.co.id" target="_blank">
                            <img src={SajinariLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}