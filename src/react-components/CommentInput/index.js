import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Input from "./../Input";

import "./styles.css";

/* Component for the Student Form */
class CommentInput extends React.Component {
  render() {
    const {
      handleChange,
      commentContent,
      addComment
    } = this.props;

    return (
		<div>
			<div className="comment-input__header">
				<h2>Add Your Comment</h2>
			</div>
     		<Grid className="comment-input" container spacing={4}>
		        <Input
		          name="commentContent"
		          value={commentContent}
		          onChange={handleChange}
		          label="CommentContent"
		        />

		        <Grid
		          className="comment-input__button-grid"
		          item
		          xl={2}
		          lg={2}
		          md={12}
		          s={12}
		          xs={12}
		        >
		          <Button
		            variant="contained"
		            color="primary"
		            onClick={addComment}
		            className="comment-input__submit-button"
		          >
		            Add Comment
		          </Button>
   		     	</Grid>
      		</Grid>
      	</div>
    );
  }
}

export default CommentInput;
