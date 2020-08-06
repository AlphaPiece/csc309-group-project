import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import SigninButton from "./../SigninButton";
import SigninImage from "./../SigninImage";
import {user} from "./../../actions/queue"

  const user2 = new user("user2", "user2", "email", 
                    "regular", [],[])
  const admin = new user("admin", "admin", "email3", 
                    "admin", [],[])

class Login extends React.Component {
    state = {
       Username: "",
       Password: "",
       userValid: false,
       passValid: false,
       currentUser: null,
       users: [user2, admin],
       login_user: null
    };

    handleInput = event => {
      const target = event.target
      const value = target.value
      const name = target.name

      this.setState({[name]: value}, () => {this.checkCondition(name, value)});
    };

    checkCondition = (name, value) => {
      //Server call needed to obtain users and current user from database
      const userArray = this.state.users
      const pass = this.state.Password
      let userValid = this.state.userValid
      let passValid = this.state.passValid
      let currentUser = this.state.currentUser

      switch(name) {
        case "Username":
          for (let i = 0; i < userArray.length; i++){
            if (userArray[i].username === value){
              currentUser = userArray[i]
              userValid = true
              break;
            }
            currentUser = null
            userValid = false
          }
          break;

        case "Password":
          if (userValid && pass === currentUser.password){
            passValid = true
          } else {
            passValid = false
          }
          break;
        default:
          break;
      }

      this.setState({userValid: userValid, passValid: passValid, currentUser: currentUser});
    };
    
    checkUserPassMatch = event =>{
      if (!this.state.userValid){
        alert("User does not exist!")
      } else if (this.state.userValid && !this.state.passValid){
        alert("Password does not match user!")
      }

      const login = this.state.currentUser
      //server call needed to set login_user global variable in database.
      this.setState({login_user: login});
    };

  render() {
    let link
    if (this.state.userValid && this.state.passValid){
      if (this.state.currentUser.type.trim() === "admin"){
        link = <Link to={"./../AdminDash"}>
                <SigninButton val="Login" type="submit" cssClass="login2" click={this.checkUserPassMatch}/>
              </Link>;
      } else {
        link = <Link to={"./../UserProfile"}>
                <SigninButton val="Login" type="submit" cssClass="login2" click={this.checkUserPassMatch}/>
              </Link>;
      }
    } else {
      link = <SigninButton val="Login" type="submit" cssClass="login2" click={this.checkUserPassMatch}/>;
    }

    return (
          <div className="container1">
            <SigninImage/>
            <div><span className="signin">Sign into your account</span></div>
            <form className="login1">
              <p><SigninButton name="Username" val={this.state.Username} text="Username" type="text" cssID="button1" handle={this.handleInput}/></p>
              <p><SigninButton name="Password" val={this.state.Password} text="Password" type="text" cssID="button1" handle={this.handleInput}/></p>
              <Link to={"./../Register"}>
                <SigninButton val="Create Account" type="submit"/>
              </Link>
              {link}
            </form> 
          </div>
    );
  }
}

export default Login;
