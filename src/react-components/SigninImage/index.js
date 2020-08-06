import React from "react";
import "./styles.css";
import covid from './../Register/static/covid.png'
import { Link } from "react-router-dom";

/* Component for the Home page */
class SigninImage extends React.Component {
  
  render() {
  	const {cssID} = this.props
    return (
    	<div>
    		<Link to={"./../"}><img src={covid} className="image" id={cssID} alt="amazon"/></Link>
        </div>
    );
  }
}

export default SigninImage;
