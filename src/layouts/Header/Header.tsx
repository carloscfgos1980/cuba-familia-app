import FunCubaLogo from "./headerComponents/FunCubaLogo";
import CEFNav from "./headerComponents/CEFNav";
import icon_hamburger from "../icon_hamburger.png";
import { useState } from "react";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    const toggle = () => setMenuToggle(!menuToggle); 
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row justify-content-between p-2">
                <div className="col-sm-7 align-self-center order-sm-2 py-2">
                    <p className="fs-3 text-light text-center">LIBERTAD PARA LOS PRESOS POLITICOS </p>
                </div>
                <div className="col-5 col-sm-2 align-self-center order-sm-1 text-start">
                    <FunCubaLogo/>
                </div>
                <div className="col-sm-3 align-self-end order-sm-3 ps-5 d-none d-sm-block">
                    <CEFNav/>
                </div>
                <div className="col-5 d-block d-sm-none">
                    {!menuToggle ? 
                        (<img src={icon_hamburger} 
                            width="30%"
                            onClick={toggle}
                            className="align-center rounded bg-light float-end"
                            style={{ cursor: "pointer" }}
                            alt="logo" />)
                    :
                    <div className="text-end float-end pe-2">
                        <button onClick={toggle} type="button" className="btn btn-light fw-bold">X</button>
                        <CEFNav/>           
                    </div>
                }
                </div>
            </div>

        </div>
    )
}

export default Header