import React, { memo } from 'react';

export default memo(function Home() {
	return (
		<div className="container mx-auto my-auto px-4 flex h-screen items-center content-center self-center">
			<div>
				<h1 className="font-mono text-6xl tracking-wide ">
					Meet <span className="italic underline">Wali</span>
				</h1>
				<p className="font-mono text-lg text-gray-800 ">
					The personal finance manager you've been waiting for
				</p>
			</div>
		</div>
	);
});
