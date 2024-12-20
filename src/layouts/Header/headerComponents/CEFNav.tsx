import { NavLink } from "react-router-dom";
import "../../layout.css";

const CEFNav = () => {
  return (
    <nav className="d-flex flex-column flex-sm-row mt-2">
      <NavLink className="text-decoration-none" to="/">
        <span className="px-2 fs-5">Home</span>
      </NavLink>
      <NavLink className="text-decoration-none" to="/project">
        <span className="px-2 fs-5">Quienes somos</span>
      </NavLink>
      <NavLink className="text-decoration-none" to="/goals">
        <span className="px-2 fs-5">Que hacemos</span>
      </NavLink>
      <NavLink className="text-decoration-none" to="/collaborations">
        <span className="px-2 fs-5">Cómo ayudar</span>
      </NavLink>
    </nav>
  );
};

export default CEFNav;
