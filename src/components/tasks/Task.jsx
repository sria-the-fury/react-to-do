import React from 'react';
import moment from "moment";
import { removeTask } from "../../actions/taskActions";
import { toggleChecked } from "../../actions/taskActions";
import { connect } from "react-redux";
import Check from "./Check";



const Task = ({ task, removeTask, toggleChecked }) => {

    const handleRemoveTask = (task) => {
        removeTask(task);
    };

    const handleCheck = (task) => {
        toggleChecked(task);
    }

    return (

        <div style={{marginTop: "10px", borderRadius: "5px"}}>
            <div className="list-upper text-break">
                <div className="row">
                    <div className="col-12">
                        { task.checked ? <p className="card-text text-warning">  { task.task } </p> : <p className="card-text text-light">  { task.task }</p> }
                    </div>

                </div>

            </div>


            <div className="list-lower">
                <div className="row" style={{textAlign: "center"}}>

                    <div className="col-5">
                        <small style={{textAlign: "left" , color: "#e0e0e0"}}>{moment(task.date.toDate()).calendar()}</small>
                    </div>

                    <div className="col-5">
                        <span style={{color: "white"}}> <Check checked={task.checked} onClick={()=> handleCheck(task)}/></span>
                        {task && task.checked ? <small className="text-warning" >Completed</small> : <small className="text-light">Incomplete</small>}

                    </div>

                    <div className="col-2">
                        <span className="material-icons text-danger" style={{cursor: "pointer", marginTop: "5px"}} onClick={() => handleRemoveTask(task)}>delete</span>

                    </div>
                </div>

            </div>



            </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChecked: ( task ) => dispatch( toggleChecked(task) ),
        removeTask:  ( task ) => dispatch(removeTask(task))
    };
};

export default connect(null,mapDispatchToProps)(Task);