import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Card from './Card';
import { LeftArrow, RightArrow } from './Arrows';
import useDrag from './UseDrag';
import { Item } from './data';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface Props {
	items: Item[];
}

function ScrollerOne({ items }: Props) {
	const { dragStart, dragStop, dragMove, dragging } = useDrag();

	const [selected, setSelected] = useState<string>('');

	const handleDrag =
		({ scrollContainer }: scrollVisibilityApiType) =>
		(e: React.MouseEvent) =>
			dragMove(e, posDiff => {
				if (scrollContainer.current) {
					scrollContainer.current.scrollLeft += posDiff;
				}
			});

	const handleItemClick = (itemId: string) => () => {
		if (dragging) {
			return false;
		}
		setSelected(selected !== itemId ? itemId : '');
	};

	const onWheel = (
		apiObj: scrollVisibilityApiType,
		e: React.WheelEvent
	): void => {
		const isTouchpad = Math.abs(e.deltaX) !== 0 || Math.abs(e.deltaY) < 15;

		if (isTouchpad) {
			e.stopPropagation();
			return;
		}

		if (e.deltaY < 0) {
			apiObj.scrollNext();
		} else if (e.deltaY > 0) {
			apiObj.scrollPrev();
		}
	};
	return (
		<ScrollMenu
			LeftArrow={LeftArrow}
			RightArrow={RightArrow}
			onWheel={onWheel}
			onMouseDown={() => dragStart}
			onMouseUp={() => dragStop}
			onMouseMove={handleDrag}
		>
			{items.map(item => (
				<Card
					key={item.id}
					item={item}
					handleItemClick={handleItemClick(String(item.id))}
					selected={String(item.id) === selected}
				/>
			))}
		</ScrollMenu>
	);
}

export default ScrollerOne;
