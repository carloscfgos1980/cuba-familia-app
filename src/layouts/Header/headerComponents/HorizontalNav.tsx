import { NavLink } from "react-router-dom";
import "../../layout.css";

const HorizontalNav = () => {
  return (
    <nav className="d-inline-block align-center">
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/page2">
        <span>Page 2</span>
      </NavLink>
      <NavLink to="/page3">
        <span>Page 3</span>
      </NavLink>
    </nav>
  );
};

export default HorizontalNav;
