import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { removeReview } from "../../actions/queue";

import "./style.css";

const log = console.log;

class Review extends React.Component {
  /*  Common 'Lifecycle' methods 
      - constructor
      - componentDidMount
      - componentWillUnmount
  */

  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      seconds: 0
    };
  }


  render() {
    const { review, queueComponent } = this.props;

    return (
      <div className='reviewHistory'>
       <div className='reviewIconContainer'>
         <img className='reviewIcon' src={review.imgSrc}/>
       </div>
       <div className='reviewContent'>
         <h3><Link to={"./../"}>{review.description}</Link></h3>
         <p>{review.review}</p>
       </div>
     </div>
    );
  }
}

export default Review;
