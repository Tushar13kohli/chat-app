import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';

export const Register = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const validationMessage = {
		empty: 'One of the field is empty',
		noMatch: 'Passwords dont match',
	};
	const isFormValid = () => {
		debugger;
		if (isFormEmpty(user)) {
			setError(validationMessage.empty);
			return false;
		} else if (!isPasswordValid(user)) {
			setError(validationMessage.noMatch);
			return false;
		} else {
			return true;
		}
	};

	const isPasswordValid = ({ password, passwordConfirmation }) => {
		return password === passwordConfirmation ? true : false;
	};

	const isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		if (username && email && password && passwordConfirmation) {
			return false;
		}
		return true;
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (isFormValid()) {
			setError('');
			setLoading(true);
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.username)
				.then(createdUser => {
					console.log(createdUser);
					setLoading(false);
				})
				.catch(err => {
					setLoading(false);
					setError(err.message);
				});
		}
	};

	const handleChange = event => {
		const newEntry = {
			[event.target.name]: event.target.value,
		};
		setUser(user => ({ ...user, ...newEntry }));
	};

	return (
		<Grid textAlign="center" style={{ maxWidth: 450, margin: 'auto' }} className="app">
			<Grid.Column>
				<Icon size="huge" name="wechat" color="black" />
				<Header as="h1" color="black" textAlign="center">
					Register for Dev Chat
				</Header>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							fluid
							name="username"
							icon="user"
							iconPosition="left"
							placeholder="Username"
							onChange={handleChange}
							className={error.includes('user') ? error : ''}
							type="text"
						/>
						<Form.Input
							fluid
							name="email"
							icon="mail"
							iconPosition="left"
							placeholder="Email Address"
							className={error.includes('email') ? error : ''}
							onChange={handleChange}
							type="email"
						/>
						<Form.Input
							fluid
							name="password"
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							className={error.includes('Passwords') ? 'error' : ''}
							onChange={handleChange}
							type="password"
						/>
						<Form.Input
							fluid
							name="passwordConfirmation"
							icon="repeat"
							iconPosition="left"
							placeholder="Password Confirmation"
							className={error.includes('Passwords') ? 'error' : ''}
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
							color="orange"
							fluid
							size="large"
						>
							Submit
						</Button>
					</Segment>
				</Form>
				<Message>
					Already a User ? <Link to="/login">Login</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};
