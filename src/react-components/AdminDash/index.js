import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "./../Header";
import { uid } from "react-uid";
import SigninButton from "./../SigninButton";
import {user, comment, Review} from "./../../actions/queue"

const comment_user1 = new comment("user1", 1, "Agree", new Date(), false)
const comment2_user1 = new comment("user1", 2, "I like it", new Date(), false)
const comment_user2 = new comment("user2", 1, "Agree, too", new Date(), true)
const comment_user3 = new comment("user1", 3, "Fucking horse shit", new Date(), true)


const review1 = new Review(1, 
    "N95 mask", "good product", "user1",[comment_user1], "n95.jpg",false)
const review2 = new Review(2, 
    "Gloves", "Good Quality! Protect us from covid-19", "user1",[comment_user2], "gloves.jpeg", false)
const review3 = new Review(3, 
    "Super Gloves", "Total bullshit. Too expensive!", "user2",[comment2_user1, comment_user3], "gloves.jpeg", false)


const user1 = new user("user1", "user1", "email", 
                    "regular", [comment_user1, comment2_user1, comment_user3],[review1, review2])
const user2 = new user("user2", "user2", "email2", 
                    "regular", [comment_user2],[review3])
const user3 = new user("admin", "admin", "email3", 
                    "admin", [],[])

class AdminDash extends React.Component {
	state = {
  		currUser: user3,
  		reviewArray: [review1, review2, review3],
    	allUsers: [user1, user2, user3],
    	commentArray: [comment_user1, comment_user2, comment_user3, comment2_user1],
    	currentReview: null,
  		change: false
  	}

  	getReviewFromComment = (comment) => {
  		const prodID = comment.productID
  		const products = this.state.reviewArray
  		for (let i = 0; i < products.length; i++){
  			if (products[i].productID === prodID){
  				return products[i]
  			}
  		}
  	}

  	deleteComment = (comment, review, user, event) => {

  		//Server call needed to retrieve comments, reviews and users from database
  		const index = this.state.commentArray.indexOf(comment)
  		this.state.commentArray.splice(index, 1)
  		
  		const indexReview = this.state.reviewArray.indexOf(review)
  		const indexCommentinReview = this.state.reviewArray[indexReview].comments.indexOf(comment)
  		this.state.reviewArray[indexReview].comments.splice(indexCommentinReview, 1)
  		
  		const indexUser = this.state.allUsers.indexOf(user)
  		const indexCommentinUser = this.state.allUsers[indexUser].comments.indexOf(comment)
  		this.state.allUsers[indexUser].comments.splice(indexCommentinUser, 1)
  		
  		this.setState({
        	change: true
      	});
  	}

  	setReview = (review, event) => {
  		 //Server call needed to change global variable.
  		let currentReview = this.state.currentReview
  		currentReview = review; 
  		this.setState({currentReview: currentReview});
  	}

  render() {
    return (
    <div>
      <Header username={this.state.currUser.username} login={this.state.currUser}/>
    	<div className="headerTitle">Click on image or link below to review. Approve or deny review or delete comment.</div>
    	<div className="grid">
	    <div className="gridItem">
	      <div className="titlea">Product Reviews Pending</div>
	      <table>
	      	<tbody>
	      	{this.state.reviewArray.filter(rev => rev.approvalStatus === false).map(review => (
	      		<tr key={uid(review)}>
	            <td><div className="reviewa">
	            <Link to={"./../ProductPage"} onClick = {(e) => this.setReview(review, e)}>
	            	<img className="reviewPic" alt="review icon" src={review.imgSrc}/>
	            </Link>
	            </div>
	            <div>
	            <div className="reviewContenta"><b>{review.description}</b></div>
	            <div className="reviewContenta"> <span>Submitted by: {review.username} </span></div>
	      </div></td>
	            
	          </tr>))}
	        </tbody>  
	        </table>
	    </div>
	    <div className="gridItem">
	      <div className="titlea">Flagged Comments</div>
	      <table>
	      <tbody>
	      	{this.state.commentArray.filter(comm => comm.flagged === true).map(comment => (
	      		<tr key={uid(comment)}>
	            <td><div className="reviewa">
	                <div className="reviewContenta">
	                <Link to={"./../ProductPage"} onClick = {(e) => this.setReview(this.getReviewFromComment(comment), e)}>
	                  <b>Review: {this.getReviewFromComment(comment).description}</b>
	                </Link>  
	                <br/><b>Comment: {comment.content}</b><br/>Submitted by: {comment.username}<br/>
	                <SigninButton val="Delete" type="submit" click={(e) => this.deleteComment(comment, this.getReviewFromComment(comment), this.state.currUser, e)}/></div></div>
	          </td>
	          </tr>))}
	        </tbody>
	        </table>

	    </div>
	    <div className="gridItem">
	      <div className="titlea">User Information</div>
	      <table id="profilea">
	      <tbody>
	          <tr>
	            <td>Username: </td>
	            <td>{this.state.currUser.username}</td>
	          </tr>
	          <tr>
	            <td>User Type: </td>
	            <td>{this.state.currUser.type}</td>
	          </tr>
	            <tr>
	            <td>Email address: </td>
	            <td>{this.state.currUser.Email}</td>
	          </tr>
	         </tbody>
	        </table>
	      </div>

  		</div>
    </div>

    );
  }
}

export default AdminDash;
