import React from "react";
import UserImg from "./../UserImg";
import UserComments from "./../UserComments";
import UserInfo from "./../UserInfo";
import {Review, comment, user} from "./../../actions/queue.js";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";

class UserProfile2 extends React.Component {

	state = {
			// hard coded data, will be retrieve from some sort of database in phase 2.
			// server call
			user:{username: "user1",
			Email:"Email",
			type:"regular"},
			comments:[{reviewID:1, content: "Agree"},
					  {reviewID:2, content: "Agree, too"}],
			reviews:[{description: "N95 mask", review:"good product",imgSrc:"n95.jpg",reviewID:1},
					{description: "Gloves", review:"Good Quality! Protect us from covid-19",imgSrc:"gloves.jpeg",reviewID:2}]
		};
	render(){
		let user = this.state.user1
		if(user === null){
			window.location.replace("./../Login");
		}
		return(
			<div id='UserProfile'>
				<UserImg />
				<div className="createReview">
					<Link to={"./../createReview"}>
						<Button variant="outline-dark">Create New Review</Button>{' '}
					</Link>
				</div>
				<UserInfo user = {this.state.user}/>
				<UserComments user={user} queueComponent = {this} comments={this.state.comments} reviews = {this.state.reviews}/>
			</div>
		);
	}
}

export default UserProfile2;