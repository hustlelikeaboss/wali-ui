import React from 'react';

export default function Icon({
	icon,
	onClick,
	title,
	className
}: {
	icon: string;
	onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
	title?: string;
	className?: string;
}) {
	return (
		<span
			className={`material-icons text-gray-600 rounded-full ${
				onClick ? 'p-3 cursor-pointer hover:bg-gray-200' : ''
			} ${className}`}
			title={title || icon}
			onClick={onClick}
		>
			{icon}
		</span>
	);
}
