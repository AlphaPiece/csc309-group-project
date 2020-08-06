import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import {user, Review, comment} from "./../../actions/queue"

/* The Header Component */


class Header extends React.Component {
  state = 
  {
    user:this.props
  }
  handleUser = () =>{
    this.setState({user:null});
}

  render() {
    let log;
    if(this.state.user)
    {
      log = <Link className="log" to={"./../"}>
            <span onClick={() => this.handleUser()} className="logout_button">Log out</span>
            </Link>
    }
    else
    {
      log =  <Link className="log" to={"./../Login"}>
              <span className="logout_button">Login/Sign up</span>
              </Link>
    }
    return (
    	<div className="header">
    		<Link className="contactLink" to={"./../Contact"}>
        <span className="contact_button">Contact Us</span>
        </Link>
        <Link className="backtohome" to={"./../"}>
        <span className="contact_button">Back To Home</span>
        </Link>
        {log}
      	</div>
    );
  }
}

export default Header;
