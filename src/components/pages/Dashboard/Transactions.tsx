import React, { memo } from 'react';
import { Transaction } from '../../../types';
import Icon from '../../atoms/Icon';

export default memo(function Transactions({ transactions, size }: Props) {
	return (
		<div className='flex-initial'>
			<div className='flex flex-col'>
				<div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
					<div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded'>
						<table className='min-w-full'>
							<thead>
								<tr>
									<th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>

									<th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
										Name
									</th>
									<th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
										Amount($)
									</th>
									<th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
										Cleared?
									</th>
									<th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
										Date
									</th>
								</tr>
							</thead>
							<tbody className='bg-white'>
								{transactions.slice(0, size).map(tx => (
									<tr key={tx.transaction_id}>
										<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
											<Icon icon='expand_more' />
										</td>
										<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
											<div className='flex items-center'>
												<div className='flex-shrink-0 h-10 w-10'>
													<img
														className='h-10 w-10'
														src={`https://simpleicons.org/icons/${tx.name
															.toLowerCase()
															.replace(/['\s]/gi, '')}.svg`}
														alt={tx.name}
														// set default image if brand logo not found
														onError={e => {
															e.currentTarget.onerror = null;
															e.currentTarget.src =
																'https://img.icons8.com/ios/50/000000/online-store.png';
														}}
														title={tx.name}
													/>
												</div>
												<div className='ml-4'>
													<div className='text-sm leading-5 font-medium text-gray-900'>
														{tx.name}
													</div>
													<div className='text-sm leading-5 text-gray-500'>
														{tx.payment_channel}
													</div>
												</div>
											</div>
										</td>

										<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
											<span
												className={`px-4 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
													tx.amount > 0 ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'
												}`}
											>
												{tx.amount > 0 ? `-${tx.amount}` : `${Math.abs(tx.amount)}`}
											</span>
										</td>

										<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-xs leading-5 font-medium'>
											{tx.pending ? (
												<Icon icon='close' className='text-red-500' />
											) : (
												<Icon icon='done' className='text-green-500' />
											)}
										</td>

										<td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
											{tx.date}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
});

type Props = {
	transactions: Transaction[];
	size: number;
};
