import React from 'react';
import styled from '@emotion/styled';

import { itemsToCols } from './utils';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 0.5em;
`;

const Column = styled.div<{ numOfCols: number }>`
	flex: ${props => 100 / props.numOfCols + '%'};
	max-width: ${props => (100 - 10) / props.numOfCols + '%'};
	padding: 0 0.5em;

	* {
		margin-top: 1em;
		vertical-align: middle;

		// border-radius: 8px;
		// box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
		// transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		// :hover {
		// 	transform: scale(1.035, 1.035);
		// 	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
		// }
	}

	/* Responsive layout - makes a two column-layout instead of four columns */
	@media (max-width: 800px) {
		flex: 50%;
		max-width: 50%;
	}

	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media (max-width: 600px) {
		flex: 100%;
		max-width: 100%;
	}
`;

type Props = {
	items: Array<any>;
	numOfCols?: number;
	render?: any;
};

const Masonry = React.memo(({ items, numOfCols = 4, render }: Props) => {
	const itemsPerCol = items.length / numOfCols;
	const cols = itemsToCols(items, itemsPerCol);
	return (
		<Wrapper>
			{cols.map((col: Array<any>, index: number) => (
				<Column key={'col-' + index} numOfCols={numOfCols}>
					{col.map(item => render ? render(item) : (
						<img
							key={item.id}
							src={item.url}
							alt={item.description}
							style={{ width: '100%' }}
						/>
					))}
				</Column>
			))}
		</Wrapper>
	);
});

export default Masonry;
