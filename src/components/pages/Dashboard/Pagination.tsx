import React, { memo } from 'react';

export default memo(function Pagination({ totalTransactions, size }: Props) {
	return (
		<div className="row-span-1 bg-white py-3">
			<div className="flex items-center justify-between">
				<div className="flex-1 flex justify-between sm:hidden">
					<a
						href="/"
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
					>
						Previous
					</a>
					<a
						href="/"
						className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
					>
						Next
					</a>
				</div>
				<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
					<div>
						<p className="text-sm leading-5 text-gray-700 pl-2">
							Showing
							<span className="font-medium"> 1 </span>
							to
							<span className="font-medium"> {size} </span>
							of
							<span className="font-medium">
								{' '}
								{totalTransactions}{' '}
							</span>
							results
						</p>
					</div>
					<div>
						<span className="relative z-0 inline-flex shadow-sm">
							{/* prev */}
							<button
								type="button"
								className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>

							{Array(Math.ceil(totalTransactions / size))
								.fill(1)
								.map((_, i) => (
									<button
										key={i}
										type="button"
										className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
									>
										{i + 1}
									</button>
								))}

							{/* next */}
							<button
								type="button"
								className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
});

type Props = {
	totalTransactions: number;
	size: number;
};
