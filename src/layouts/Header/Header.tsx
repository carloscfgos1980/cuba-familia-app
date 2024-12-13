import FunCubaLogo from "./headerComponents/FunCubaLogo";
import HorizontalNav from "./headerComponents/HorizontalNav";
import icon_hamburger from "../icon_hamburger.png";
import { useState } from "react";
import VerticalNav from "./headerComponents/VerticalNav";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    const toggle = () => setMenuToggle(!menuToggle); 
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row justify-content-between px-2">
                <div className="col-sm-4 align-self-center py-2">
                    <p className="display-5 text-light">LIBERTAD PARA LOS PRESOS POLITICOS </p>
                </div>
                <div className="col-5 col-sm-3 align-self-center text-start">
                    <FunCubaLogo/>
                </div>
                <div className="col-sm-5 align-self-end text-end d-none d-sm-block">
                    <HorizontalNav/>
                </div>
                <div className="col-5 d-block d-sm-none" style={{width:'200px'}}>
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
                        <VerticalNav/>           
                    </div>
                }
                </div>
            </div>

        </div>
    )
}

export default Header