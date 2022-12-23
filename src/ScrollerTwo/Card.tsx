import React from 'react';
import { IScrollerTwoItem } from './scrollerTwoData';

interface Props {
	item: IScrollerTwoItem;
}

const Card = ({ item }: Props) => {
	return (
		<div className='inline-block px-3'>
			<div className='w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
				{item.title}
			</div>
		</div>
	);
};

export default Card;
