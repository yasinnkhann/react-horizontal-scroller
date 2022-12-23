import Card from './Card';
import { scrollerThreeData } from './scrollerThreeData';

const ScrollerThree = () => {
	return (
		<div className='container flex-grow w-full py-4 sm:py-16 mx-auto px-0'>
			<div className='mx-auto w-full md:w-4/5 px-4'>
				<div className='container my-8'>
					<div
						id='scrollContainer'
						className='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8'
					>
						{scrollerThreeData.map(item => (
							<Card key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollerThree;
