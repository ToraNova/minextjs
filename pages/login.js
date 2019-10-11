/*
 * Login page
 * used for logging in
 * please refer to https://github.com/zeit/next.js/issues/153
 *
 */

//react components
import React, {Component} from 'react'

//custom service
import AuthService from '../utils/authser.js'

import Layout from '../layouts/minimalist/border1.js'

//configure AuthService onto localhost:1996
const auth = new AuthService('http://localhost:1996')

class Login extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount () {
		if (auth.loggedIn()) {
			// redirect if you're already logged in
			this.props.url.replaceTo('/profile')
		}
	}

	handleSubmit (e) {
		e.preventDefault()
		// yay uncontrolled forms!
		auth.login(this.refs.email.value, this.refs.password.value)
		.then(res => {
		console.log(res)
		this.props.url.replaceTo('/profile')
		})
		.catch(e => {
			console.log(e)
		})
	}

	render () {
		return (
		<Layout>
		<div className="login">
		<img src="/worm128.png" alt="worm128.png" />
		<h1>Wormy</h1>
		<form onSubmit={this.handleSubmit}>

		<label htmlFor='email'>Email Login</label>
		<input id="email" type="text" ref="email"/>

		<label htmlFor='password'>Password</label>
		<input id="password" type="password" ref="password"/>

		<input type="submit" value="Login"/>

		</form>
		</div>
		<style jsx>{`
			.login {
			max-width: 340px;
			margin: 0 auto;
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 4px;
			}
			form {
			display: flex;
			flex-flow: column;
			}
			label {
			font-weight: 600;
			}
			input {
			padding: 8px;
			margin: 0.3rem 0 1rem;
			border: 1px solid #ccc;
			border-radius: 4px;
			}
			.error {
			margin: 0.5rem 0 0;
			display: none;
			color: brown;
			}
			.error.show {
			display: block;
			}
		`}</style>
		</Layout>
		)
	}
}

export default Login
