import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css"
const Navbar = () => {
  const dispatch = useDispatch()
  const isAuth=  useSelector(state =>state.auth.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout());

  }


  return (
    <div>
    {isAuth && (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        NEWS APPLICATION
      </Link>
 
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <NavLink className="nav-link" aria-current="page" to="/news-articles">
          Home
        </NavLink>

        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
        <div>
        <button type="button" className="btn btn-primary ml-5" onClick={logoutHandler}>Logout</button>

        </div>
   
        
      </div>
    </div>
  </nav>)}
  </div>
    
  );
};

export default Navbar;