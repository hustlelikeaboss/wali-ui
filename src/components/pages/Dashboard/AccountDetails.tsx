import React, { memo } from 'react';

import data from '../../../assets/data/transactions.json';
import { Transaction } from '../../../types';

import Pagination from './Pagination';
import Transactions from './Transactions';

export default memo(function AccountDetails() {
	const transactions: Transaction[] = data.transactions.transactions;
	const totalTransactions = data.transactions.total_transactions;

	return (
		<div className="flex-1 p-5">
			{/* analytics */}

			{/* pagination */}
			<Pagination totalTransactions={totalTransactions} />

			{/* table */}
			<Transactions transactions={transactions} />
		</div>
	);
});
