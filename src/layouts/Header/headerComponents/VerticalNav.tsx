import { NavLink } from "react-router-dom";
import "../../layout.css";

const VerticalNav = () => {
  return (
    <nav className="align-center d-flex flex-column pe-2">
      <NavLink to="/">
        <span className="px-1">Home</span>
      </NavLink>
      <NavLink to="/page2">
        <span className="px-1">Page 2</span>
      </NavLink>
      <NavLink to="/page3">
        <span className="px-1">Page 3</span>
      </NavLink>
    </nav>
  );
};

export default VerticalNav;
