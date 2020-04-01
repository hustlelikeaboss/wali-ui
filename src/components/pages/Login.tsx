import React, { memo, useState } from 'react';
import { useAuth } from '../../hooks';

export default memo(function Login() {
	const [email, setEmail] = useState('');
	const { doLogin } = useAuth();

	return (
		<div className='container mx-auto my-auto px-4 flex h-screen justify-center items-center content-center'>
			<div className='self-center lg:w-1/3 md:w-1/2 flex flex-col'>
				<h1 className='text-6xl tracking-wide mb-6'>hello</h1>

				<div className='w-full mb-6 md:mb-0'>
					<label
						className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						htmlFor='email'
					>
						Email Address
					</label>
					<input
						className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
						id='email'
						type='email'
						placeholder='jane.doe@domain.com'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<p className='text-xs italic mb-6 text-gray-700'>
						We'll create an account for you if none exists.
					</p>
				</div>

				<button
					className='text-white font-semibold uppercase tracking-widest bg-gray-800 hover:bg-gray-900 disabled:bg-gray-300 mt-8 py-3 px-6 border border-gray-600 rounded shadow'
					onClick={() => doLogin(email)}
				>
					Email me the magic link
				</button>

				<p className='self-end inline-block align-baseline text-xs text-gray-500 italic mt-3'>
					We use passwordless{' '}
					<a
						className='inline-block align-baseline text-xs italic underline text-blue-500 hover:text-blue-800'
						href='https://magic.link/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Magic
					</a>
					.
				</p>
			</div>
		</div>
	);
});
