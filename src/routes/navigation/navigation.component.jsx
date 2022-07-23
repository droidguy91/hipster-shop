import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <AppLogo className="logo"></AppLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
