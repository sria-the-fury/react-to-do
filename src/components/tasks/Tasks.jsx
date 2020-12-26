import React from 'react';
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";


const Tasks = ({tasks}) => {
    return (
        <div style={{marginTop: "20px",borderRadius: "5px"}}>
            { tasks && tasks.map(task =>   <Task task = {task} key={task.id}/>) }

        </div>



    );
};

const mapStateToProps = state => {
    const tasks = state.firestore.ordered.tasks;
    const uid = state.firebase.auth.uid;
    return {
        tasks: tasks,
        uid: uid
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(ownProps => [{
            collection: "tasks",
            where: ["authorId", "==", ownProps.uid],
            orderBy: ["date", "desc"]

        }]
    ))(Tasks);