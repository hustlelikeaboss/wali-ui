import React, { memo } from 'react';

export default memo(function Home() {
	return (
		<div className="container mx-auto my-auto px-4 flex h-screen items-center content-center">
			<div className="self-center">
				<h1 className="text-6xl tracking-wide mb-4">
					Meet <span className="italic underline">Wali</span>
				</h1>
				<p className="text-lg text-gray-800">
					The personal finance manager you've been waiting for:
					<ul className="list-inside list-square text-gray-600 italic pl-5 py-5">
						<li>
							<span className="pl-2">ad-free</span>
						</li>
						<li>
							<span className="pl-2">no-fluff</span>
						</li>
						<li>
							<span className="pl-2">privacy-respecting</span>
						</li>
					</ul>
				</p>
				<div className="my-10">
					<a
						href="/login"
						className="text-white font-semibold uppercase tracking-widest bg-gray-800 hover:bg-gray-900 py-4 px-6 border border-gray-600 rounded shadow"
					>
						My Account
					</a>
				</div>
			</div>
		</div>
	);
});
