import Instagram from "../instagram.svg";
import Facebook from "../facebook.svg";
import Email from "../envelope-at-fill.svg";
import Twitter from "../icon_twitter.png"

// import '../../'

const Footer = () => {

    return (
        <div className="container-fluid bg-dark my-2">
            <h3 className="text-light text-center pt-3">Contact us</h3>
            <div className="row justify-content-between">
                <div className="email col-sm-4">
                    <a href="mailto:cubaenfamilia2021@gmail.com" className="text-decoration-none">
                        <div className=" d-flex align-items-baseline py-2">
                            <img width='50p%' className='bg-light px-2 rounded mx-2' src={Email} alt="Email"/>
                            <p className="lead fw-bold">
                                cubaenfamilia2021@gmail.com
                            </p>                        
                        </div>
                    </a>
                </div>
                <div className="instagram col-sm-2">
                    <a className="text-decoration-none" href='https://www.instagram.com/cubaenfamilia/' target="_blank" rel="noreferrer">
                        <div className=" d-flex align-items-baseline pb-2">
                            <img className="bg-light rounded mx-2" width='40p%' src={Instagram} alt="Instagram" />
                            <p className="lead fw-bold">@CEF</p>
                        </div>
                    </a >
                </div>
                <div className="facebook col-sm-2">
                    <a className="text-decoration-none" href='https://www.facebook.com/groups/735810607858390' target="_blank" rel="noreferrer">
                        <div className="d-flex align-items-baseline py-2">
                            <img className="bg-light p-1 rounded mx-2"  width='40p%' src={Facebook} alt="Facebook" />
                            <p className="lead fw-bold">@CEF</p>                            
                        </div>
                    </a>
                </div>
                <div className="twitter col-sm-2">
                    <a className="text-decoration-none" href='https://www.facebook.com/groups/735810607858390' target="_blank" rel="noreferrer">
                        <div className="col-sm-3 col-sm-3 d-flex align-items-baseline pb-2 ">
                            <img className="bg-light p-1 rounded mx-2 mt-2"  width='40p%' src={Twitter} alt="Twitter" />
                            <p className="lead fw-bold">@CEF</p>                            
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;