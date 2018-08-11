import React, { Component } from "react";


export default class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin"
        this.props.onAuth(authType, this.state).then(() => {
            this.props.history.push("/");
        }).catch(()=>{
            return;
        })

    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { buttonText, heading, signUp, errors, history, removeError } = this.props; //history comes from React Router
        //listen for changes in the route
        // const alertStyle = {
        //     width: "800px"
        // }
        history.listen(() => {
            removeError();
        });
        return(
            <div className="row justify-content-md-center text-center">
            <form onSubmit={this.handleSubmit}>
                <h2>{heading}</h2>
                {/* {errors.message && <div className="alert alert-danger"style={alertStyle}>{errors.message}</div>} */}
                {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                <label>Email</label>
                <input 
                id="email"
                name="email" 
                type="text" 
                onChange={this.handleChange}
                value={email}
                className="form-control"
                >
                </input>
                <label>Password</label>
                <input 
                id="password"
                name="password" 
                type="password" 
                onChange={this.handleChange}
                value={password}
                className="form-control"
                >
                </input>
                {signUp && (
            <div>
                <label>Username</label>
                <input 
                id="username"
                name="username" 
                type="text" 
                onChange={this.handleChange}
                value={username}
                className="form-control"
                >
                </input>
                <label>Image</label>
                <input 
                id="profileImageUrl"
                name="profileImageUrl" 
                type="text" 
                onChange={this.handleChange}
                value={profileImageUrl}
                className="form-control"
                >
                </input>
            </div>
                )}
            <button type="submit" className="btn btn-success">{buttonText}</button>
            </form>
            </div>
        );
    }
}
