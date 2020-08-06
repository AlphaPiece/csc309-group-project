import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import {reportComment} from "../../actions/productPage";

import "./styles.css";

class Comment extends React.Component {
	checkUserType = (loginUser, comment, pageComponent) => {
		if (loginUser === null) {
			return (
			<TableRow className="comment" key={comment.username}>
        		<TableCell component="th" scope="row">
          			{comment.username}
        		</TableCell>

        		<TableCell component="th" scope="row">
          			{comment.content}
        		</TableCell>
	        </TableRow>
			);
		} else {
			return (
			<TableRow className="comment" key={comment.username}>
       			<TableCell component="th" scope="row">
          			{comment.username}
       			 </TableCell>

        		<TableCell component="th" scope="row">
          			{comment.content}
        		</TableCell>

        		<TableCell component="th" scope="row">
         			 <Button
            			variant="contained"
            			color="secondary"
            			onClick={
              			//removeComment.bind(this, pageComponent, comment)
              			//() => this.removeStudent(student) // this also works
			  			reportComment.bind(this, pageComponent, comment)
            			}
          			>
            			report
          			</Button>
        		</TableCell>
      		</TableRow>
			);
		}
	}

  render() {
    const {loginUser, comment, pageComponent} = this.props;
    return (
		this.checkUserType(loginUser, comment, pageComponent)
    );
  }
}

export default Comment;
