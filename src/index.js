import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './routes';
import firebase from './firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';
import { setUser, clearUser } from './containers/App/action';
import { Spinner } from './components/Spinner';

const store = createStore(rootReducer, composeWithDevTools());

const Root = ({ history, dispatch, isLoading }) => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				dispatch(setUser(user));
				history.push('/');
			} else {
				history.push('/login');
				dispatch(clearUser());
			}
		});
	}, [isLoading]);

	const render = isLoading ? <Spinner /> : <Routes />;
	return render;
};

const mapStateToProps = state => {
	console.log(state);
	return {
		isLoading: state.user.isLoading,
	};
};
const RootWithAuth = withRouter(connect(mapStateToProps)(Root));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<RootWithAuth />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
