import FunCubaLogo from "./headerComponents/FunCubaLogo";
import CEFNav from "./headerComponents/CEFNav";
import icon_hamburger from "../icon_hamburger.png";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const Header = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    const toggle = () => setMenuToggle(!menuToggle); 
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row justify-content-between p-2">
                {!menuToggle && (
                    <div className="col-sm-5 align-self-center order-sm-2 py-2">
                        <p className="fs-3 text-light text-center">LIBERTAD PARA LOS PRESOS POLITICOS </p>
                    </div>
                )
                }
                {!menuToggle && (
                    <div className="col-5 col-sm-2 align-self-center order-sm-1 text-start">
                        <FunCubaLogo/>
                    </div>                    
                )}
                <div className="col-sm-5 align-self-end order-sm-3 ps-5 d-none d-sm-block">
                    <a href="mailto:cubaenfamilia2021@gmail.com" className="text-decoration-none d-none d-sm-block text-end pe-5 pb-5">
                        <CustomWidthTooltip title="Click para contactar el equipo de CEF">
                            <button type="button" className="btn btn-danger">DONAR</button>
                        </CustomWidthTooltip>                           
                    </a>
                    <CEFNav/>
                </div>
                <div className="col-5 d-block d-sm-none">
                    {!menuToggle && 
                        (<img src={icon_hamburger} 
                            width="30%"
                            onClick={toggle}
                            className="align-center rounded bg-light float-end"
                            style={{ cursor: "pointer" }}
                            alt="logo" />)
                        }
                </div>
                {menuToggle && (
                    <div className="row d-block d-sm-none">
                        <div className="d-flex justify-content-between">
                            <div className="col-5 align-self-top pt-2">
                                <a href="mailto:cubaenfamilia2021@gmail.com" className="text-decoration-none">
                                    <CustomWidthTooltip title="Click para contactar el equipo de CEF">
                                        <button type="button" className="btn btn-danger">DONAR</button>
                                    </CustomWidthTooltip>                           
                                </a>
                            </div>
                            <div className="col-5 text-end">
                                <button onClick={toggle} type="button" className="btn btn-light fw-bold btn-sm">X</button>
                                <CEFNav/>           
                            </div>
                        </div>
                    </div>
                )}                        
                        

            </div>

        </div>
    )
}

export default Header