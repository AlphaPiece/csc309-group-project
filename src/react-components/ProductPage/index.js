import React from "react";
import Product from "./../Product";
import CommentInput from "./../CommentInput";
import CommentList from "./../CommentList";
import Button from "@material-ui/core/Button";
import Header from "./../Header";

import {addComment, approveReview, deleteReview} from "../../actions/productPage";
import {user, Review, comment} from "../../actions/productPage"

import "./styles.css";

/*
** Hard-coded data start
*/
const comment_user1 = new comment("user1", 1, "Agree", new Date(), false)
const comment2_user1 = new comment("user1", 2, "I like it", new Date(), false)
const comment_user2 = new comment("user2", 1, "Agree, too", new Date(), true)
const comment_user3 = new comment("user1", 3, "Fucking horse shit", new Date(), true)

const review1 = new Review(1, "ViriMASK Respirator",
        "ViriMASK Protective Oculo-Respirator is so much better than the N95/Surgical Mask: (1) Prevents inhalation of viruses (2) Prevents conjunctival contamination (3) Easy to don, can be washed or disinfected",
		"user1", [comment_user1], "viri_mask.jpg", true)

const review2 = new Review(2, "Gloves",
    "Good Quality! Protect us from covid-19", "user1",[comment_user2],
    "gloves.jpeg", true)
const review3 = new Review(3,
    "Super Gloves", "Total bullshit. Too expensive!", "user2",[], "gloves.jpeg", false)

const user1 = new user("user1", "user1", "email",
                    "regular", [comment_user1, comment2_user1],[review1, review2])
const user2 = new user("user2", "user2", "email2",
                    "regular", [comment_user2],[review3])

const user3 = new user("user3", "user3", "email3",
                    "admin", [],[])

/*
** Hard-coded data end
*/



class ProductPage extends React.Component {
	state = {
		commentContent: "",
		comments: [comment_user1, comment_user2, comment_user3],
		loginUser: null,
		currentReview: review1,
		reviews: [review1, review2, review3]
	};

	handleInputChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	checkApproval = () => {
		if (this.state.currentReview === null) {
			return (
				<div className="App">
					<Header user={this.state.user}/>
					<div className="deleted-review">
						<h2>This review had been deleted.</h2>
					</div>
				</div>
			)
		} else if (this.state.currentReview.approvalStatus === false) {
			return (
				<div className="App">
					<Header user={this.state.user}/>
					
					<Product
						name={this.state.currentReview.productName}
						image={this.state.currentReview.imgSrc}
						description={this.state.currentReview.description}
					/>
					
					<div className="approve-review__submit-button">
						<Button
							variant="contained"
							color="primary"
							onClick={
								approveReview.bind(this, this,
									this.state.currentReview)
							}
						>
							Approve Review
						</Button>
					</div>

					<div className="delete-review__submit-button">
						<Button
							variant="contained"
							color="secondary"
							onClick={
								deleteReview.bind(this, this,
									this.state.currentReview)
							}
						>
							Delete Review
						</Button>
					</div>
				</div>
			)
		} else if (this.state.loginUser === null) {
			return (
				<div className="App">					
					<Header user={this.state.user}/>

					<Product
						name={this.state.currentReview.productName}
						image={this.state.currentReview.imgSrc}
						description={this.state.currentReview.description}
					/>

					<CommentList
						loginUser={this.state.loginUser}
						comments={this.state.currentReview.comments}
						pageComponent={this}
					/>
				</div>
			)
		} else if (this.state.loginUser.type === "admin") {
			return (
				<div className="App">					
					<Header user={this.state.user}/>

					<Product
						name={this.state.currentReview.productName}
						image={this.state.currentReview.imgSrc}
						description={this.state.currentReview.description}
					/>

					<CommentList
						loginUser={this.state.loginUser}
						comments={this.state.currentReview.comments}
						pageComponent={this}
					/>

					<div className="delete-review__submit-button">
						<Button
							variant="contained"
							color="secondary"
							onClick={
								deleteReview.bind(this, this,
									this.state.currentReview)
							}
						>
							Delete Review
						</Button>
					</div>
				</div>
			)

		} else {
			return (
				<div className="App">
					<Header user={this.state.user}/>

					<Product
						name={this.state.currentReview.productName}
						image={this.state.currentReview.imgSrc}
						description={this.state.currentReview.description}
					/>

					<CommentInput
						commentContent={this.state.commentContent}
						handleChange={this.handleInputChange}
						addComment={() => addComment(this)}
					/>

					<CommentList
						loginUser={this.state.loginUser}
						comments={this.state.currentReview.comments}
						pageComponent={this}
					/>
				</div>
			)
		}
	}


	render() {
		return (
			this.checkApproval()
		);
	}
}

export default ProductPage;
