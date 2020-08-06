import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Review from "./../Review"
import { uid } from "react-uid";
import Comment from "./../UserComments";
import ReviewHeader from "./../ReviewHeader";


class UserReview extends React.Component {
	render(){
		console.log("userreview")
		const {user, queueComponent, reviews} = this.props;
		let component;
          component = reviews.filter(rev => rev.username === user.username).map(review => (
            <Review
              key={uid(
                review
              )} /* unique id required to help React render more efficiently when we modify the students list. */
              review={review}
              queueComponent={queueComponent}
            />
          ))
		return(
	<div id ='reviewHistory'>
		<ReviewHeader user={user} queueComponent = {queueComponent} reviews={reviews}/>
		<div id='reviewContent'>
		{component}
		</div>
    </div>
		);
	}
}

export default UserReview




