import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>User Name : {props.username}</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
		</div>
		);
}

export default UserOutput;