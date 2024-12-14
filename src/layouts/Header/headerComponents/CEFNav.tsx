import { NavLink } from "react-router-dom";
import "../../layout.css";

const CEFNav = () => {
  return (
    <nav className="d-flex flex-column flex-sm-row mt-2">
      <NavLink className="text-decoration-none" to="/">
        <span className="px-2 fs-5">Home</span>
      </NavLink>
      <NavLink className="text-decoration-none" to="/page2">
        <span className="px-2 fs-5">Page 2</span>
      </NavLink>
      <NavLink className="text-decoration-none" to="/page3">
        <span className="px-2 fs-5">Page 3</span>
      </NavLink>
    </nav>
  );
};

export default CEFNav;
