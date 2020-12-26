import React from 'react';
import {Link} from "react-router-dom";
import NavItems from "./NavItems";
import { connect } from  "react-redux";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark d-flex justify-content-center">
            <Link to="/" className = "navbar-brand">
                <div className="text-center" style={{width: "50px", height: "50px", background: "white", borderRadius: "50%"}}>
                    <span className="material-icons text-center" style={{fontSize: "35px", marginTop: "5px"}}>description</span>

                </div>
                </Link>
            <NavItems/>
        </nav>

    );
}

const  mapStateProps = (state) => {
    return{

    }

}

export default connect( mapStateProps)(Navbar);