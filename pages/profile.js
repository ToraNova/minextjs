/*
 * This is a protected page
 * it requires authentication
 */

import React, {Component} from 'react'
import AuthRequired from  '../utils/authreq.js'

import Nav from './nav.js';
import Layout from '../layouts/minimalist/border0.js'

class Profile extends Component {
	render() {
		const user = this.props.auth.getProfile()
		console.log(user)
		return (
			<div>
			<Layout>
			<Nav/>
			</Layout>
			<div><b>User Profile</b></div>
			<div>Username: {user.name}</div>
			<div>Email: {user.email}</div>
			</div>
		)
	}
}

export default AuthRequired(Profile)
