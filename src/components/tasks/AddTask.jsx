import React, {Component} from 'react';
import { addTask } from "../../actions/taskActions";
import { connect } from 'react-redux';

class AddTask extends Component {
    state = {
        task: '',
        checked: false

    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let isEmptyValue = document.getElementById("task").value;
        if(isEmptyValue !== '') this.props.addTask(this.state);

        document.getElementById("addTaskForm").reset();

    }
    render() {
        return (
            <form autoComplete="off" style={{marginTop: "30px"}} onSubmit={this.handleSubmit} id="addTaskForm">

                <div className="form-group">
                    <input type="text" className="form-control" id="task" onChange={this.handleChange} placeholder="Add a task"/>
                </div>

                <button type="submit" className="btn btn-primary" style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>ADD TASK</button>
            </form>
        );
    }
}

const mapDispatchProps = dispatch => {
    return {
        addTask: task => dispatch (addTask(task))
    };
}

export default connect(null, mapDispatchProps)(AddTask);