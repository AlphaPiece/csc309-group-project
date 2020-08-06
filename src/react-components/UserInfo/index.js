import React from "react";
import "./style.css";

class UserInfo extends React.Component {
	render(){
		const {user} = this.props;
		return(
			<div id="userInfo">
				<ul>
					<li>Username: {user.username}</li>
					<li>User Type: {user.type}</li>
					<li>Email address: {user.Email}</li>
				</ul>
			</div>
		);
	}
}

export default UserInfo

