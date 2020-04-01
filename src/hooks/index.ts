import { Magic } from 'magic-sdk';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY || '');

/**
 * useAuth handles login/logout and track user status via Magic
 */
export const useAuth = () => {
	const history = useHistory();
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [username, setUsername] = useState('');

	const doLogin = async (email: string) => {
		try {
			const didToken = await magic.auth.loginWithMagicLink({ email });
			console.log('didToken: ', didToken);

			const isLoggedIn = await magic.user.isLoggedIn();
			setIsUserLoggedIn(isLoggedIn);

			if (isLoggedIn) {
				/* Get user metadata including email */
				const userMetadata = await magic.user.getMetadata();
				console.log('userMetadata: ', userMetadata);
				setUsername(userMetadata.email || '');

				// call backend to create user and/or get user data

				// TODO: existing user with linked accounts
				history.push('/dashboard');

				// TODO: new user
				// prompt to link an account
			}
		} catch (err) {
			console.error('failed to log in: ', err.toString());
		}
	};

	const doLogout = async () => {
		magic.user
			.logout()
			.then(isLoggedOut => {
				if (isLoggedOut) {
					setUsername('');
					setIsUserLoggedIn(false);
					history.push('/');
				}
			})
			.catch(err => {
				console.error('failed to log out: ', err.toString());
			});
	};

	return { username, isUserLoggedIn, doLogin, doLogout };
};
