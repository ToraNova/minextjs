/*
 * This is the about page
 * this corresponds to the /about path
 * to write details and information about the webapp
 */

//Link API from Next.js
import Link from 'next/link';
import Head from 'next/head';

//custom components import
import Nav from './nav.js';
import Border from '../layouts/minimalist/border0.js';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
	<div>
	<Head>
	<title>Bootstrap Test</title>
	</Head>
	<Border>
	<Nav />
	</Border>

	<Border>
	<Container fluid>
	<Row>
		<Col>a</Col>
		<Col>b</Col>
		<Col>c</Col>
	</Row>
	<Row>
		<Col>a</Col>
		<Col>b</Col>
		<Col>c</Col>
		<Col>d</Col>
	</Row>
	</Container>
	</Border>

	</div>
);

export default About;
