import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import UserComment from "./../UserComment"
import ReviewHeader from "./../ReviewHeader";
import { uid } from "react-uid";

import { removeComment } from "../../actions/queue";

import "./style.css";

const log = console.log;

class UserComments extends React.Component {
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


  render(){
    console.log("usercomment")
    const {user, queueComponent, comments, reviews} = this.props;
    console.log(comments)
    let component;
          component = comments.map(comment => (
            <UserComment
              key={uid(
                comment
              )} /* unique id required to help React render more efficiently when we modify the students list. */
              comment={comment}
              queueComponent={queueComponent}
              reviews = {reviews}
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

export default UserComments;
