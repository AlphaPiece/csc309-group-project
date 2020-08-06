import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { removeComment } from "../../actions/queue";

import "./style.css";

const log = console.log;

function findReview(reviews, reviewID){
  let review;
  for(let i = 0; i < reviews.length; i++){
      if (reviews[i].reviewID === reviewID){
          review = reviews[i];
          break;
      }
  }
  return review
}


class UserComment extends React.Component {


  render() {
    const { comment, queueComponent, reviews} = this.props;
    const review = findReview(reviews, comment.reviewID)
    return (
      <div className='reviewHistory'>
       <div className='reviewIconContainer'>
         <img className='reviewIcon' src={review.imgSrc}/>
       </div>
       <div class='deleteButton'><Button onClick={removeComment.bind(this, queueComponent, comment)}>Delete</Button></div>
       <div className='reviewContent'>
         <h3><Link to={"./../"}>{review.description}</Link></h3>
         <p>You comment:  {comment.content}</p>
       </div>
     </div>
    );
  }
}

export default UserComment;
