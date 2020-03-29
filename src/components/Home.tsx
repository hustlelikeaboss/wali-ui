import React, { memo } from 'react';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.jpg';

export default memo(function Home() {
	return (
		<div className='flex h-screen items-stretch content-center justify-center p-4'>
			<div className='flex-initial lg:w-25'>
				<div className='card h-full p-5'>
					{/* header */}
					<div className='flex items-center content-center'>
						<img src={logo} alt='logo' className='flex-grow-0 w-10 h-10 rounded-full mr-2' />
						<p className='flex-grow font-mono'>Wali</p>
						<img src={avatar} alt='avatar' className='flex-grow-0 w-10 h-10 rounded-full mr-4' />
					</div>

					{/* divider */}
					<hr className='my-6' />

					{/* search bar: input w/ leading-icon */}
					<div className='flex items-center content-center bg-gray-200 rounded-full my-5'>
						<span className='material-icons pl-5 text-gray-600'>search</span>
						<input
							id='search-bar'
							type='text'
							placeholder='search'
							className='appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 leading-tight rounded-r-full focus:outline-none focus:border-gray-500'
						/>
					</div>

					{/* accounts */}
					<div className='my-8'>
						<div className='flex items-center content-center bg-pink-100 rounded p-5 my-1'>
							<img
								src='https://img.icons8.com/nolan/64/visa.png'
								alt='visa-card'
								className='flex-grow-0 w-10'
							/>
							<p className='flex-grow pl-2'>**** 1234</p>
							<span className='material-icons text-gray-600 block flex-grow-0 self-center float-right'>
								chevron_right
							</span>
						</div>

						<div className='flex items-center content-center bg-gray-100 p-5 my-1'>
							<img
								src='https://img.icons8.com/nolan/64/discover.png'
								alt='discover-card'
								className='flex-grow-0 w-10'
							/>
							<p className='flex-grow pl-2'>**** 5678</p>
							<span className='material-icons text-gray-600 block flex-grow-0 self-center float-right'>
								chevron_right
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flex-1'>main</div>
		</div>
	);
});
