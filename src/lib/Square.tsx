import React from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
`;

const GridItem = styled.div`
	margin: 1.5em;
	* {
		border-radius: 8px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		:hover {
			transform: scale(1.035, 1.035);
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
		}
	}
`;

type Props = {
	items: Array<any>;
	maxWidth?: string;
	render?: any;
};

const Original = React.memo(({ items, maxWidth, render }: Props) => {
	return (
		<Grid>
			{items.map(item => (
				<GridItem key={item.id}>
					{render ? (
						render(item)
					) : (
						<img
							src={item.url}
							alt={item.description}
							style={{
								width: maxWidth || '300px',
								height: maxWidth || '300px',
								objectFit: 'cover'
							}}
						/>
					)}
				</GridItem>
			))}
		</Grid>
	);
});

export default Original;
