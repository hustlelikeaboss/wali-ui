import React, { memo, useState } from 'react';
import { Pie, Line } from 'react-chartjs-2';

const Tab = ({
	tabIndex,
	activeTab,
	label,
	onClick,
}: {
	tabIndex: number;
	activeTab: number;
	label: string;
	onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}) => (
	<li className={'-mb-px mr-1'} onClick={onClick}>
		<span
			className={`bg-white inline-block text-sm uppercase tracking-widest cursor-pointer transition-all ease ${
				tabIndex === activeTab
					? 'border-l border-t border-r rounded-t py-2 px-4 text-blue-700'
					: 'py-2 px-4 text-blue-500 hover:text-blue-800'
			}`}
		>
			{label}
		</span>
	</li>
);

export default memo(function Analytics() {
	const charts = [
		{
			index: 1,
			title: 'Cash Flow',
		},
		{
			index: 2,
			title: 'Categories',
		},
	];
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className='flex-1'>
			<div className='h-full grid grid-rows-6 grid-flow-row gap-0'>
				{/* tab nav */}
				<div className='row-span-1'>
					<ul className='flex border-b'>
						{charts.map(({ index, title }) => (
							<Tab
								key={index}
								label={title}
								tabIndex={index}
								activeTab={activeTab}
								onClick={() => setActiveTab(index)}
							/>
						))}
					</ul>
				</div>

				{/* monthly income vs expenses */}
				<div
					className={`row-span-5 mb-10 transition-all duration-2000 ease ${activeTab === 1 ||
						'hidden'}`}
				>
					<Line
						height={350}
						data={{
							labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
							datasets: [
								{
									label: 'Income',
									fill: false,
									backgroundColor: '#9ad0f5',
									borderColor: '#9ad0f5',
									data: [2500, 1800, 2600, 2500, 2350, 2800, 2000],
								},
								{
									label: 'Expenses',
									backgroundColor: '#ffb1c1',
									borderColor: '#ffb1c1',
									fill: false,
									data: [1250, 2250, 1950, 2300, 2550, 2000, 2750],
								},
							],
						}}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							title: {
								display: false,
								text: 'Monthly Income vs. Expenses',
							},
							tooltips: {
								mode: 'index',
								intersect: false,
							},
							hover: {
								mode: 'nearest',
								intersect: true,
							},
							scales: {
								xAxes: [
									{
										display: true,
										scaleLabel: {
											display: true,
											labelString: 'Month',
										},
									},
								],
								yAxes: [
									{
										display: true,
										scaleLabel: {
											display: true,
											labelString: 'Amount($)',
										},
									},
								],
							},
						}}
					/>
				</div>

				{/* expenses by category */}
				<div
					className={`row-span-5 mb-10 transition-all duration-2000 ease ${activeTab === 2 ||
						'hidden'}`}
				>
					<Pie
						height={350}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							title: {
								display: false,
								text: 'Expenses by Category',
							},
							legend: {
								position: 'right',
							},
						}}
						data={{
							labels: ['Grocery', 'Restaraunts & Bars', 'Shopping'],
							datasets: [
								{
									data: [300, 50, 100],
									backgroundColor: ['#ffb1c1', '#9ad0f5', '#FFCE56'],
									hoverBackgroundColor: ['#ffb1c1', '#9ad0f5', '#FFCE56'],
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	);
});
