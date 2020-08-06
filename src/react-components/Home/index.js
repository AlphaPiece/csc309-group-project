import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Header";
import { uid } from "react-uid";
import "./styles.css";
import Background from "./static/2.jpg";
import { Grid } from '@material-ui/core';
import {user, Review, comment} from "./../../actions/queue"

const comment_user1 = new comment("user1", 1, "Agree", new Date(), false)
const comment2_user1 = new comment("user1", 2, "I like it", new Date(), false)
const comment_user2 = new comment("user2", 1, "Agree, too", new Date(), true)
const comment_user3 = new comment("user1", 3, "Fucking horse shit", new Date(), true)

const review1 = new Review(1, 
    "N95 mask", "good product", "user1",[comment_user1], "n95.jpg",true);
const review2 = new Review(2, 
    "Gloves", "Good Quality! Protect us from covid-19", "user1",[comment_user2], "gloves.jpeg", true);
const review3 = new Review(3, 
    "Super Gloves", "Total bullshit. Too expensive!", "user2",[comment2_user1, comment_user3], "gloves.jpeg", false);
const user2 = new user("user2", "user2", "email2", 
                    "regular", [comment_user2],[review3])

/* Component for the Home page */
class Home extends React.Component {
	state = {
        //server function to set current user into database
		user: user2,
        search: "",
        //server function to get reviews from database
        reviewArray: [review1, review2, review3],
        //server function to set current review into database
        currentReview: null
    }

    handleUser = () =>{
        this.setState({user:null});
    }
    
    handleCurrentReview = review =>{
        //server function to set current review into database
        this.setState({currentReview:review});
        console.log(review);
        console.log(this.state.user.username)
    }

    renderReview = review =>{
        const {search} = this.state;
        let productID = review.productID;

        if(search != "" && review.description.toString().toLowerCase().indexOf(search.toString().toLowerCase())===-1){
            return null;
        }

        return (
        <div className="grid-item">
        <div className="col-md-3" style={{marginTop:'20px'}}>
                <slot onClick={() => this.handleCurrentReview(review)} className="Review">
                <Link to={"./../productPage"}>
                    <div className="reviewImg">
                        <img src={review.imgSrc} className={productID} className="imgSize" alt={review.description}/>
                    </div>
                        <div className="middle">
                        <div className="text">Go to the review</div>
                    </div>
                        <h3 className="center">{review.username} <span className="grey">@{review.description}</span></h3>
                </Link>
                </slot>
            </div>
            </div>)
    }

    onchange = e =>{
        this.setState({search:e.target.value});
        }


  render() {
    let welcome;
    let user = this.state.user;
    if(this.state.user)
    {
        if ({user}.type === "admin")
        {
            welcome = <div className="welcome">
                      <div id="welcomeWeb">
                        <Link style={{ textDecoration: 'none' }} to={"./../AdminDash"}><span>Welcome to Our Web {this.state.user.username}</span></Link>
                      </div>
                      <div id="welcomeMessage">
                    <span>Explore What You Really Need</span>
                    </div>
                    </div>
        }
        else
        {
            welcome = <div className="welcome">
                      <div id="welcomeWeb">
                        <Link style={{ textDecoration: 'none' }} to={"./../UserProfile"}><span>Welcome to Our Web {this.state.user.username}</span></Link>
                      </div>
                      <div id="welcomeMessage">
                    <span>Explore What You Really Need</span>
                    </div>
                    </div>
        }
    }
    else
    {
        welcome = <div className="welcome">
                      <div id="welcomeWeb">
                        <Link style={{ textDecoration: 'none' }} to={"./../Login"}><span>Welcome to Our Web, Login/Sign up</span></Link>
                      </div>
                      <div id="welcomeMessage">
                    <span>Explore What You Really Need</span>
                    </div>
                    </div>
    }
    const {search} = this.state;
    const filteredReviews = this.state.reviewArray.filter(review =>{
        return review.description.toString().toLowerCase().indexOf(search.toString().toLowerCase())!=-1 && review.approvalStatus === true
    })
    let log;
    if(this.state.user)
    {
      log = <Link className="log" to={"./../"}>
            <span onClick={() => this.handleUser()} className="logout_button">Log out</span>
            </Link>
    }
    else
    {
      log =  <Link className="log" to={"./../Login"}>
              <span className="logout_button">Login/Sign up</span>
              </Link>
    }

    return (
    <div>

<div className="header">
    		<Link className="contactLink" to={"./../Contact"}>
            <span className="contact_button">Contact Us</span>
            </Link>
            <Link className="backtohome" to={"./../"}>
            <span className="contact_button">Back To Home</span>
            </Link>
            {log}
      	    </div>

    <div className="wrapper"></div>
       
    {welcome}

    <div className="searchEngine">
    <h2>Search Whatever You Want</h2>
    <form id="searchBar">
         <input type="text" placeholder="Search..." onChange={this.onchange}/>
    </form>
    </div>

    <div className="main">
    <Grid
        container
        direciton="row"
        alignItems="center"
        style={{padding: 20}}> 
                    {
                        filteredReviews.map(review=>{
                            return this.renderReview(review)
                        })
                    }
    </Grid>
    </div>  
    </div>
    );
  }
}

export default Home;
