import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import firebase from '../../firebase';
import './register.css';

export const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		if (isFormValid(user)) {
			setError('');
			setLoading(true);
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then(signedInUser => {
					console.log(signedInUser);
					setLoading(false);
				})
				.catch(err => {
					setError(err.message);
					setLoading(false);
				});
		}
	};

	const isFormValid = ({ email, password }) => {
		return email && password ? true : false;
	};

	const handleChange = event => {
		console.log('firebase', firebase);
		const newEntry = {
			[event.target.name]: event.target.value,
		};
		setUser(user => ({ ...user, ...newEntry }));
	};

	return (
		<Grid textAlign="center" style={{ maxWidth: 450, margin: 'auto' }} className="app">
			<Grid.Column>
				<Icon size="huge" name="gem" color="violet" />
				<Header as="h1" color="violet" textAlign="center">
					Login to Dev Chat
				</Header>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							fluid
							name="email"
							icon="mail"
							iconPosition="left"
							placeholder="Email Address"
							className={error && error.includes('email') ? error : ''}
							onChange={handleChange}
							type="email"
						/>
						<Form.Input
							fluid
							name="password"
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							className={error && error.includes('Passwords') ? 'error' : ''}
							onChange={handleChange}
							type="password"
						/>
						{error && error.length && (
							<React.Fragment>
								<Header as="h2" color="red" textAlign="center">
									ERROR
								</Header>
								<Message color="red">{error}</Message>
							</React.Fragment>
						)}
						<Button
							disabled={loading}
							className={loading ? 'loading' : ''}
							color="violet"
							fluid
							size="large"
						>
							Submit
						</Button>
					</Segment>
				</Form>
				<Message>
					Don't have an account ? <Link to="/register">Register</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};
