import React, { memo } from 'react';

import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.jpg';
import Icon from '../../atoms/Icon';
import Card from '../../molecules/Card';

export default memo(function Sidebar() {
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
						title="Add an account"
						onClick={() => console.log('clicked')}
					/>
				</div>
			</div>
		</div>
	);
});
