import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import SigninButton from "./../SigninButton";
import SigninImage from "./../SigninImage";
import {user} from "../../actions/queue"

const user1 = new user("user1", "user1", "email", 
                    "regular", [],[])
const user2 = new user("user2", "user2", "email2", 
                    "regular", [],[])
const user3 = new user("admin", "admin", "email3", 
                    "admin", [],[])

class Register extends React.Component {
  state = {
       user: "",
       email: "",
       pass1: "",
       pass2: "",
       userValid: false,
       passValid: false,
       emailValid: false,
       users: [user1, user2, user3]
    };

    handleInput = event => {
      console.log("updating user...")
      const target = event.target
      const value = target.value
      const name = target.name

      this.setState({[name]: value}, () => {this.checkField(name, value)});
    };

    checkField = (name, value) => {
      //Server call needed to obtain users and current user from database
      const userArray = this.state.users
      const pass1 = this.state.pass1
      const pass2 = this.state.pass2
      let userValid = this.state.userValid
      let passValid = this.state.passValid
      let emailValid = this.state.emailValid

      switch(name) {
        case "user":
          if (user !== ""){
            for (let i = 0; i < userArray.length; i++){
              if (userArray[i].username === value){
                userValid = false
                break;
              } 
              userValid = true
            }
          
          } else {
            userValid = false
          }
        break;
        case "email":
          emailValid = value !== "" ? true: false
          break;
        default:
          passValid = (pass1 === pass2 && pass1 !== "") ? true: false
          break;
      }

      this.setState({userValid: userValid, passValid: passValid, emailValid: emailValid});
    };

    checkFields = () => {
      if (!this.state.userValid){
        alert("Username already exists! Choose a new username.")
      } else if (!this.state.passValid){
        alert("Passwords do not match! Please enter matching passwords!")
      } else if (!this.state.emailValid){
        alert("Email address field cannot be blank. Enter a valid email!")
      } else {
        const newUser = new user(this.state.user, this.state.pass1, this.state.email, 
                    "regular", [],[])
        let userArray = this.state.users
        // Server call required to push new user information into database.
        userArray.push(newUser)
        this.setState({ users: userArray});
        console.log(this.state.users)
      }
    }

  render() {
    let link
    if (this.state.userValid && this.state.passValid && this.state.emailValid){
      link = <Link to={"./../Login"}>
              <p><SigninButton val="Register" type="submit" cssClass="loginb2" click={this.checkFields}/></p>
            </Link>;
    } else {
      link = <p><SigninButton val="Register" type="submit" cssClass="loginb2" click={this.checkFields}/></p>;
    }

    return (
        <div className="container3">
          <SigninImage/>
          <div><span className="registerb">Create your account</span></div>
          <form className="loginb">

            <p><SigninButton name="user" val= {this.state.user} text="Username" cssID="emailb" type="text" handle={this.handleInput}/></p>
            <p><SigninButton name="email" val={this.state.email} text="Email address" cssID="emailb" type="text" handle={this.handleInput}/></p>
            <p><SigninButton name="pass1" val={this.state.pass1} text="Password" type="text" handle={this.handleInput}/>
            <SigninButton name="pass2" val={this.state.pass2} text="Confirm" type="text" handle={this.handleInput}/></p>
            {link}
          </form> 
        </div>
    );
  }
}

export default Register;
