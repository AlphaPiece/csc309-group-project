const log = console.log

export const Review = function (productID, productName, description,
								username, comments, imgSrc, approvalStatus) {
    this.productID = productID
	this.productName = productName
    this.description = description
    this.username = username
    // array of comment object
    this.comments = comments
    this.imgSrc = imgSrc
    // boolean
    this.approvalStatus = approvalStatus
}


// date is a Date object
export const comment = function (username, productID, content, date, flagged) {
  this.username = username
  this.productID = productID
  this.content = content
  this.date = date
  this.flagged = flagged
}

export const user = function (username, password, Email, type, comments, reviews) {
  this.username = username
  this.password = password
  this.Email = Email
  this.type = type
  this.comments = comments
  this.reviews = reviews
}


export const addComment = productPage => {
	log("adding comment");

	const commentList = productPage.state.currentReview.comments;

	const newComment = new comment(
		productPage.state.loginUser.username,
		productPage.state.currentReview.productID,
		productPage.state.commentContent,
		new Date(),
		false
	);

	commentList.push(newComment);
	// Call database to update currentReview
	// productPage.state.currentReview.comments = commentList;
	productPage.setState({
		comments: commentList
	});

};

export const reportComment = (productPage, comment) => {
	const updatedComments = productPage.state.comments.map(c => {
		if (c === comment) {
			c.flagged = true;
		}
		return c
	});

	// Call database to update currentReview
	// productPage.state.currentReview.comments = updatedComments;
	productPage.setState({
		comments: updatedComments
	});
};

export const approveReview = (productPage, review) => {
	const updatedReviews = productPage.state.reviews.map(r => {
		if (r === review) {
			r.approvalStatus = true;
		}
		return r
	});

	// Call database to update the review list
	// productPage.state.reviews = updatedReviews;
	productPage.setState({
		reviews: updatedReviews
	});
};

export const deleteReview = (productPage, review) => {
	const filteredReviews = productPage.state.reviews.filter(r => {
		return r !== review;
	});

	productPage.setState({
		currentReview: null,
		reviews: filteredReviews
	});
};

export const removeComment = (productPage, comment) => {
	const filteredComments = productPage.state.comments.filter(c => {
		return c !== comment;
	});

	// Call database to update the review list
	productPage.setState({
		comments: filteredComments
	});
};
