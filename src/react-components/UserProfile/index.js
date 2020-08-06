import React from "react";
import UserImg from "./../UserImg";
import "./style.css";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserReview from "./../UserReview";
import UserInfo from "./../UserInfo";
import {Review, comment, user} from "./../../actions/queue.js";
import Header from "./../Header"
class UserProfile extends React.Component {
	state = {
			// hard coded data
			// server call
			user:{username: "user1",
			Email:"Email",
			type:"regular"},
			comments:["Agree", "Agree, too"],
			reviews:[{description: "N95 mask", review:"good product",imgSrc:"n95.jpg"},
					{description: "Gloves", review:"Good Quality! Protect us from covid-19",imgSrc:"gloves.jpeg"}]
		};
	render(){
		if(this.state.user === null){
			window.location.replace("./../Login");
		}
		return(
			<div id ='body'>
			<Header user={this.state.user}/>
			<div id='UserProfile'>
				<UserImg />
				<div className="createReview">
					<Link to={"./../createReview"}>
						<Button variant="outline-dark">Create New Review</Button>{' '}
					</Link>
				</div>
				<UserInfo user = {this.state.user}/>
				<UserReview user={user} queueComponent = {this} reviews={this.state.reviews}/>
			</div>
			</div>
		);
	}
}

export default UserProfile;