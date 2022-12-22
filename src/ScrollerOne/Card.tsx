import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Item } from './data';

interface Props {
	item: Item;
	handleItemClick: (id: string) => void;
	selected: boolean;
}

const Card = ({ item: { id, title }, handleItemClick, selected }: Props) => {
	const visibility = useContext(VisibilityContext);

	const visible = visibility.isItemVisible(String(id));

	return (
		<div
			onClick={() => handleItemClick(String(id))}
			role='button'
			style={{
				border: '1px solid',
				display: 'inline-block',
				margin: '0 10px',
				width: '160px',
				userSelect: 'none',
				cursor: 'pointer',
			}}
			tabIndex={0}
			className='card'
		>
			<div>
				<div>{title}</div>
				<div style={{ backgroundColor: visible ? 'transparent' : 'gray' }}>
					visible: {JSON.stringify(visible)}
				</div>
				<div>selected: {JSON.stringify(!!selected)}</div>
			</div>
			<div
				style={{
					backgroundColor: selected ? 'green' : 'bisque',
					height: '200px',
				}}
			/>
		</div>
	);
};

export default Card;
