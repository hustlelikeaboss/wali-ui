import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

export default memo(function Login() {
	const history = useHistory();
	const handleLogin = () => history.push('/dashboard');

	return (
		<div className="container mx-auto my-auto px-4 flex h-screen justify-center items-center content-center">
			<div className="self-center w-1/3">
				<h1 className="text-6xl tracking-wide mb-6">hello</h1>

				<div className="w-full mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="email"
					>
						Email Address
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="email"
						type="email"
						placeholder="jane.doe@domain.com"
					/>
					<p className="text-red-500 text-xs italic mb-6">
						Please fill out this field.
					</p>
				</div>

				<div className="w-full mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="password"
						type="password"
						placeholder="*********"
					/>
					<a
						className="inline-block align-baseline text-xs italic text-blue-500 hover:text-blue-800"
						href="/"
					>
						Forgot password?
					</a>
				</div>

				<div className="flex justify-between items-center content-center">
					<button
						className="text-white font-semibold uppercase tracking-widest bg-gray-800 hover:bg-gray-900 my-10 py-3 px-6 border border-gray-600 rounded shadow"
						onClick={handleLogin}
					>
						Log In
					</button>
					<a
						className="inline-block align-baseline text-xs italic text-blue-500 hover:text-blue-800"
						href="/signup"
					>
						Don't have an account?
					</a>
				</div>
			</div>
		</div>
	);
});
