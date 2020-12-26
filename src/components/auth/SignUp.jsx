import React, {Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signUp } from "../../actions/authActions";


class SignUp extends Component {

    state = {
        email: '',
        password : '',
        displayName : ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);

    }
    render() {
        const { uid } = this.props;
        return (
            uid ? <Redirect to='/'/> :
                <form className="container text-light" autoComplete="off" style={{marginTop: "30px"}} onSubmit={this.handleSubmit}>
                    <legend><h4>Sign up</h4></legend>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="displayName">Your Name</label>
                        <input type="text" className="form-control" id="displayName" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary">SIGN UP</button>
                </form>
        );
    }
}

const  mapStateProps = (state) => {
    const uid =  state.firebase.auth.uid;
    return{
        uid: uid

    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        signUp: (credentials) => dispatch( signUp(credentials))
    }

}

export default connect(mapStateProps, mapDispatchToProps)(SignUp);