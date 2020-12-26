import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

const NavItems = ({signOut, uid, displayName }) => {
    let firstName = '';
    displayName ? firstName = displayName.split(' ') : firstName = displayName;
    return (uid ? <><Link to="/signin" className = "nav-link text-light" onClick={signOut}>Log out</Link>
                {uid && displayName ?
                    <div className="float-right" style={{marginLeft: "40px", padding: "8px", background: "#607d8c", borderRadius: "20px"}}>
                        <Link to="/" className="text-right text-uppercase text-light text-decoration-none">
                            {firstName[0]}</Link></div> : '' }
            </>
            : <>
                <Link to="/signup" className = "nav-link text-light">Sign up</Link>
                <Link to="/signin" className = "nav-link text-light">Sign in</Link> </>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch( signOut() )

    }
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    const displayName = state.firebase.auth.displayName;
    return {
        uid: uid,
        displayName: displayName
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(NavItems);