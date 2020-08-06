import React from "react";
import "./style.css";

class UserImg extends React.Component {
	render(){
		return(
			<div id="userImg">
				<img className='userImg' src='userImg.png' />
			</div>
		);
	}
}

export default UserImg