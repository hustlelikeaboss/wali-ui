import React, { memo, useCallback, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.jpg';
import Icon from '../../atoms/Icon';
import Card from '../../molecules/Card';

export default memo(function Sidebar() {
	const onSuccess = useCallback((token, metadata) => {
		// send token & accounts to server
		console.log('token: ', token);

		const { accounts, institution } = metadata;
		console.log('institution: ', institution);
		console.log('accounts: ', accounts);
	}, []);

	const config = {
		clientName: 'Wali',
		env: process.env.REACT_APP_PLAID_ENV || '',
		product: ['auth', 'transactions'],
		publicKey: process.env.REACT_APP_PLAID_PUBLIC_KEY || '',
		onSuccess
	};

	const { open, ready, error } = usePlaidLink(config);
	useEffect(() => {
		console.log('ready: ', ready);
		// TODO: handle error initializing Plaid Link
		console.log('error: ', error);
	}, [ready, error]);
	const addAccount = useCallback(() => {
		if (ready) {
			open();
		}
	}, [ready, open]);

	return (
		<div className="shadow flex-initial flex flex-col p-5">
			{/* header */}
			<div className="">
				<div className="flex items-center content-center">
					<img
						src={logo}
						alt="logo"
						className="flex-grow-0 w-12 h-12 rounded-full mr-2"
					/>
					<p className="flex-grow font-semibold tracking-widest">
						Wali
					</p>
					<img
						src={avatar}
						alt="avatar"
						className="flex-grow-0 w-10 h-10 rounded-full mr-4"
					/>
				</div>
			</div>

			{/* divider */}
			<hr className="my-6" />

			{/* cards */}
			<div className="flex-grow px-1 w-40 lg:w-64">
				<Card card={{ type: 'visa', mask: 1234 }} />
				<Card card={{ type: 'mastercard', mask: 3456 }} active={true} />
				<Card card={{ type: 'discover', mask: 5678 }} />
			</div>

			{/* footer */}
			<div className="flex-grow-0">
				<div className="flex justify-between">
					<Icon
						icon="tune"
						title="Change settings"
						onClick={() => console.log('clicked')}
					/>
					<Icon
						icon="add"
						title={
							ready
								? 'Add an account'
								: 'Still initializing Plaid Link...'
						}
						onClick={addAccount}
						className={!ready ? 'cursor-not-allowed' : ''}
					/>
				</div>
			</div>
		</div>
	);
});
