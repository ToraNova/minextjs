/*
 * This is a helper utility that allows
 * authentication for pages
 * This is reusable across pages
 * The JWT token is stored as cookies
 */

//This class can be used as a service handler for login pages
//or any form of authentication
export default class AuthService {
	//if domain is passed, then use that else fallback to localhost:5000
	constructor(domain) {
		this.domain = domain || 'http://localhost:1996'
		this.fetch = this.fetch.bind(this)
		this.login = this.login.bind(this)
		this.getProfile = this.getProfile.bind(this)
	}

	// Get a token
	login(email, password) {
		return this.fetch(`${this.domain}/user/login`, {
			method: 'POST',
			body: JSON.stringify({
			email,
			password
		})
		}).then(res => {
			this.setToken(res.token) //arms the token
			return this.fetch(`${this.domain}/user/profile`, {
			method: 'GET'
		})
		}).then(res => {
			this.setProfile(res)
			return Promise.resolve(res)
		})
	}

	// Checks if there is a saved token and it's still valid
	loggedIn(){
		//TODO : check validity of token ?
		const token = this.getToken()
		//return !!token && !isTokenExpired(token) // handwaiving here
		return !!token
	}

	setProfile(profile){
		// Saves profile data to localStorage
		localStorage.setItem('profile', JSON.stringify(profile))
	}

	getProfile(){
		// Retrieves the profile data from localStorage
		const profile = localStorage.getItem('profile')
		return profile ? JSON.parse(localStorage.profile) : {}
	}

	// Saves user token to localStorage
	setToken(idToken){
		localStorage.setItem('token', idToken)
	}

	// Retrieves the user token from localStorage
	getToken(){
		return localStorage.getItem('token')
	}

	// Clear user token and profile data from localStorage
	logout(){
		localStorage.removeItem('token');
		localStorage.removeItem('profile');
	}

	// raises an error in case response status is not a success
	_checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response
		} else {
			var error = new Error(response.statusText)
			error.response = response
			throw error
		}
	}

	// performs api calls sending the required authentication headers
	fetch(url, options){
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

		if (this.loggedIn()){
			headers['Authorization'] = 'Bearer ' + this.getToken()
		}

		return fetch(url, {
		headers,
		...options
		})
		.then(this._checkStatus)
		.then(response => response.json())
	}
}
