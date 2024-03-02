import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
const Nav = () => {
// navbar design & setting navigation destination 
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-primary text-center ">
        <div className="container-fluid">
          <a id="adj" className="navbar-brand fw-bolder w-25 fs-4 text-white" >XYZ shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link id="home" className=" nav-link active text-white ms-4 fw-semibold  fs-5 shadow1 " aria-current="page" to="/">Home</Link>

              <Link id="Products" className=" nav-link active text-white ms-5  w-100  fw-semibold fs-5 shadow1" to="/Product">Products</Link>

            </div>
          </div>
        </div>
      </nav>





    </div>
  );
};

export default Nav;