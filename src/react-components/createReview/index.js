import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SigninButton from "./../SigninButton";
import SigninImage from "./../SigninImage";
import Header from "./../Header";
import {Review, user} from "../../actions/queue"

/* Component for the Home page */
class CreateReview extends React.Component {
  // server call
  state = {
       user:{username: "user1",
      Email:"Email",
      type:"regular"},
       description: "",
       review: "",
       imgSrc: "",
       data: this.props.state
    };

    handleInput = event => {
      console.log("updating description...")
      this.setState({
        description: event.target.value
      });
    };

    handleInput2 = event => {
      console.log("updating review...")
      console.log(event.target.value)
      this.setState({
        review: event.target.value
      });
    };


    checkFields = (event) => {
      if(this.state.review.trim() === "" || this.state.description.trim() === ""){
        alert("CREATION FAILED: empty review or description not allowed")
      }else{
        //upload review to database
        // server call
        console.log(this.state.review)
        console.log(this.state.description)
        console.log(this.state.imgSrc)
      }
  }

  fileSelectedHandler = (event) =>{
    console.log(event.target.files[0].name)
    this.setState({
      imgSrc:event.target.files[0]
    })
  }  
  render() {
    if(user.type === "visitor"){
      window.location.replace("./../Login");
    }

    return (
        <div className="body">
        <Header user={this.state.user}/>
          <div className="container">
          <SigninImage/>
          <div><span className="register">Create your review</span></div>
          <div className="uploadImg">
            <input type="file" onChange={this.fileSelectedHandler}/>
          </div>
          <form className="login">

            <p><SigninButton text="Description" cssID="email" type="text" handle={this.handleInput}/></p>
            <p><SigninButton text="Review" cssID="review" type="text" handle={this.handleInput2}/></p>
            <Link to="./../UserProfile">
            <p><SigninButton val="Create Reivew" type="submit" cssClass="login2" click={this.checkFields}/></p>
            </Link>
          </form> 
        </div>
        </div>
    );
  }
}

export default CreateReview;
