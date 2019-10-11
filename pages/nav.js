/*
 * This is the nav header
 * it could vary across deployments, and so its purpose is
 * only for linking pages across the webapp
 */

//Link API from Next.js
import Link from 'next/link';

//Style
const linkStyle = {
	marginRight: 15
};

//Main Nav component
const Nav = () => (
	<div>
	<Link href="/"><a style={linkStyle}>Home</a></Link>
	<Link href="/about"><a style={linkStyle}>About</a></Link>
	<Link href="/profile"><a style={linkStyle}>Profile</a></Link>
	<Link href="/login"><a style={linkStyle}>Login</a></Link>
	</div>
);

export default Nav;
