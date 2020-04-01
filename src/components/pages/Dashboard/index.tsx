import React, { memo } from 'react';
import Sidebar from './Sidebar';
import AccountDetails from './AccountDetails';

export default memo(function Dashboard() {
	return (
		<div className='flex h-screen items-stretch content-center justify-center p-4'>
			
			<Sidebar />
			<AccountDetails />
		</div>
	);
});
