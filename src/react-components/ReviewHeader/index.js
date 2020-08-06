import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./style.css";
import Button from "@material-ui/core/Button";
import UserReview from "./../UserReview";
import Comment from "./../UserComments";
import { uid } from "react-uid";
import SigninButton from "./../SigninButton";
//onClick={changeToComments.bind(this, user, reviews)}
// function findReview(reviews, reviewID){
// 	let review;
// 	for(let i = 0; i < reviews.length; i++){
// 	    if (reviews[i].reviewID === reviewID){
// 	        review = reviews[i];
// 	        break;
// 	    }
// 	}
// 	return review
// }
// function changeToComments(user, reviews){
// 		console.log("change review")
// 		let html = "";
// 		const reviewHistory = document.getElementById('reviewContent')
// 		for(let j = 0; j < user.comments.length; j++){
// 			html += buildComment(user.comments[j], reviews)
// 			html += addDelete(user.comments[j], findReview(reviews, user.comments[j].reviewID), user)
// 		}
// 		reviewHistory.innerHTML = html
// 		console.log(reviewHistory.innerHTML)
// 	}

// function buildComment(comment, reviews){
// 	let review = findReview(reviews, comment.reviewID)
// 	let html = "<div class='reviewHistory'>"+
// 	"<div class='reviewIconContainer'>"+
// 	"<img class='reviewIcon' "+"src="+review.imgSrc+">"+
// 	"</div>"+
// 	"<div class=deleteButton><Button onClick={}>Delete</Button></div>"+
// 	"<div class='reviewContent'>"+
// 	"<h3><a href='/'>"+review.description+"</a></h3>"+
// 	"<p> you comment: "+comment.content+"</p>"
// 	return html;

// }

// function addDelete(comment, review, user){
// 	let html;
// 	//html = "<SigninButton val='Delete' type='submit' click={(e) => this.deleteComment("+comment+", "+review+", "+user+",e)}/></div></div>"
// 	html = "</div>"+"</div>"
// 	return html;
// }

// function deleteComment(comment, review, user){
// 	const indexCommentinReview = review.comments.indexOf(comment)
//   	review.comments.splice(indexCommentinReview, 1)

//   	//Delete comments from user array
//   	const indexCommentinUser = user.comments.indexOf(comment)
//   	user.comments.splice(indexCommentinUser, 1)
// }

// function changeToReviews(user, reviews){
// 		console.log("change review")
// 		let html = "";
// 		const reviewHistory = document.getElementById('reviewContent')
// 		for(let j = 0; j < reviews.length; j++){
// 			if(reviews[j].username === user.username){
// 				html += buildReview(reviews[j])
// 			}
// 		}
// 		reviewHistory.innerHTML = html
// 		console.log(reviewHistory.innerHTML)
// 	}

// function buildReview(review){
// 	let html = "<div class='reviewHistory'>"+
// 	"<div class='reviewIconContainer'>"+
// 	"<img class='reviewIcon' "+"src="+review.imgSrc+">"+
// 	"</div>"+
// 	"<div class='reviewContent'>"+
// 	"<h3><a href='/'>"+review.description+"</a></h3>"+
// 	"<p>"+review.review+"</p>"+"</div></div>"
// 	return html
// }

class ReviewHeader extends React.Component {

	render(){

		// const {user, queueComponent, reviews} = this.props;
		// const component = queueComponent.comments.map(comment => (
  //           <Comment
  //             key={uid(
  //               comment
  //             )}  unique id required to help React render more efficiently when we modify the students list. 
  //             comment={comment}
  //             queueComponent={queueComponent}
  //           />
  //         ))
		return(
 		<div id='reviewHeader'>
 			<div className="Header">
 			<ul>
	 			<li><Link to={"./../UserProfile"}><Button>Review History</Button></Link></li>
	 			<li><Link to={"./../UserProfile2"}><Button>Comment History</Button></Link></li>
 			</ul>
 			</div>
 		</div>
 		);
	}
}


export default ReviewHeader








