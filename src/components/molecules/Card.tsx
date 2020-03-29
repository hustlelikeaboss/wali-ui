import React from 'react';
import Icon from '../atoms/Icon';

export default function Card({ card, active }: Props) {
	return (
		<div
			className={`flex items-center content-center rounded p-5 my-1 cursor-pointer hover:bg-gray-100 ${
				active ? 'bg-gray-200' : ''
			}`}
		>
			<img
				src={`https://img.icons8.com/ios/50/000000/${card.type}.png`}
				alt="visa"
				className="flex-grow-0 w-10"
			/>
			<p className="flex-grow pl-2">
				<span className="text-gray-700">**** </span> {card.mask}
			</p>
			<Icon icon="chevron_right" />
		</div>
	);
}

type Props = {
	card: {
		type: string;
		mask: number;
	};
	active?: boolean;
};
