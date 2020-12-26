import React from 'react';
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";
import { connect } from "react-redux";
import {Redirect} from "react-router";

const Dashboard = (uid) => {
     return ( uid.uid ?  <div className="container">
         <AddTask/>
         <Tasks/>
     </div> : <Redirect to='/signin' />
     );
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid
    };
}

export default connect(mapStateToProps)(Dashboard);
