import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import Comment from "./../Comment";

import "./styles.css";

/* Component for the List of Comments */
class CommentList extends React.Component {
  render() {
    const {loginUser, comments, pageComponent} = this.props;

    /* Our comment list.  We use the state to iterate through the 
       comment list and make an <li> for each one. */
    return (
		<div>
			<div className="comment-list__header">
				<h2>Comments</h2>
			</div>
      <Table className="comment-list">
        <TableBody>
          {comments.map(comment => (
            <Comment
              key={uid(
                comment
              )} /* unique id required to help React render more efficiently when we modify the comments list. */
			  loginUser={loginUser}
              comment={comment}
              pageComponent={pageComponent}
            />
          ))}
        </TableBody>
      </Table>

	  </div>
    );
  }
}

export default CommentList;
