import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Header";
import "./styles.css";
import {user, Review, comment} from "./../../actions/queue"

const comment_user1 = new comment("user1", 1, "Agree", new Date(), false)
const comment2_user1 = new comment("user1", 2, "I like it", new Date(), false)
const comment_user2 = new comment("user2", 1, "Agree, too", new Date(), true)
const comment_user3 = new comment("user1", 3, "Fucking horse shit", new Date(), true)

const review1 = new Review(1, 
    "N95 mask", "good product", "user1",[comment_user1], "n95.jpg",true);
const review2 = new Review(2, 
    "Gloves", "Good Quality! Protect us from covid-19", "user1",[comment_user2], "gloves.jpeg", true);
const review3 = new Review(3, 
    "Super Gloves", "Total bullshit. Too expensive!", "user2",[comment2_user1, comment_user3], "gloves.jpeg", false);
const user2 = new user("user2", "user2", "email2", 
                    "regular", [comment_user2],[review3])

/* Component for the Home page */
class Contact extends React.Component {

  state={
    //server function to get user from databse
    user:user2
  }

  render() {
    return(
      <div>
      <Header user={this.state.user}/>
    <div id='grad'>
      <h1 className="center">Xiang Chen</h1>
      <p className="center">legendxiang.chen@mail.utoronto.ca</p>
      <br></br>
      <h1 className="center">Jonathan Gabe</h1>
      <p className="center">jonathan.gabe@mail.utoronto.ca</p>
      <br></br>
      <h1 className="center">Yezheng Shao</h1>
      <p className="center">yezheng.shao@mail.utoronto.ca</p>
      <br></br>
      <h1 className="center">Zexi Wang</h1>
      <p className="center">walker.wang@mail.utoronto.ca</p>
    </div>
    </div>)

  }
}

export default Contact;
