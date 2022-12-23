import Card from './Card';
import { scrollerTwoData } from './scrollerTwoData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ScrollerTwo = () => {
	return (
		<div className='flex flex-col bg-white m-auto p-auto'>
			<div className='flex overflow-x-scroll pb-10 no-scroll-bar'>
				<div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '>
					{scrollerTwoData.map((item, idx) => (
						<Card key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ScrollerTwo;
