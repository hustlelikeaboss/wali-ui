import React from 'react';
import styled from '@emotion/styled';

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
`;

const GridItem = styled.div`
	> * {
		width: auto;
		height: 25vw;
		margin: 0.5em;
		text-align: center;
		line-height: 75px;

		// border-radius: 8px;
		// box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
		// transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		// :hover {
		// 	transform: scale(1.035, 1.035);
		// 	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
		// }

		/* Responsive layout - makes items stack */
		@media (max-width: 800px) {
			width: 50vw;
			height: auto;
		}

		/* Responsive layout - makes items stack */
		@media (max-width: 600px) {
			width: 80vw;
			height: auto;
		}
	}
`;

type Props = {
	items: Array<any>;
	render?: any;
};

const MasonryAlt = React.memo(({ items, render }: Props) => {
	return (
		<Grid>
			{items.map((item: any) =>
				render ? (
					render(item)
				) : (
					<GridItem key={item.id}>
						<img src={item.url} alt={item.description} />
					</GridItem>
				)
			)}
		</Grid>
	);
});

export default MasonryAlt;
