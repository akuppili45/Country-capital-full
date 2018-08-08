import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return (
         
            <nav style={{margin:"auto"}}>
                <Link to='/' style={{padding: "15px"}}>Home</Link>
                { !this.props.currentUser.isAuthenticated ?
                    (
                        <div style={{margin:"auto"}}>
                            <Link to='/signup' style={{padding: "15px"}}>Sign Up!</Link>
                            <Link to='/signin' style={{padding: "15px"}}>Sign In!</Link>
                        </div>
                    ) : 
                    (
                        <a onClick={this.logout} style={{padding: "15px", height:"50px"}} className="btn btn-outline-danger">Log out</a>
                    )
                }
            </nav>

        );
    }
}
function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    };
  }

export default connect(mapStateToProps, { logout })(Navbar);
