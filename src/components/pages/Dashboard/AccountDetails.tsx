import React, { memo } from 'react';

import data from '../../../assets/data/transactions.json';
import { Transaction } from '../../../types';

import Pagination from './Pagination';
import Transactions from './Transactions';
import Analytics from './Analytics';

export default memo(function AccountDetails() {
	const transactions: Transaction[] = data.transactions.transactions;
	const totalTransactions = data.transactions.total_transactions;
	const size = 3;

	return (
		<div className='flex-1 px-5'>
			<div
				className='flex flex-col h-full'
			>
				{/* analytics */}
				<Analytics />

				{/* pagination */}
				<Pagination totalTransactions={totalTransactions} size={size} />

				{/* table */}
				<Transactions transactions={transactions} size={size} />
			</div>
		</div>
	);
});
