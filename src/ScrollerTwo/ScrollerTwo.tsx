import { useRef } from 'react';
import Card from './Card';
import { scrollerTwoData } from './scrollerTwoData';
import useScrollerArrows from './useScrollerArrows';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ScrollerTwo = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const { showLeftArrow, showRightArrow } =
		useScrollerArrows(scrollContainerRef);

	const handleScrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft - 600,
				behavior: 'smooth',
			});
		}
	};

	const handleScrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft + 600,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className='flex flex-col bg-white m-auto p-auto'>
			<div className='flex'>
				{showLeftArrow && (
					<button onClick={handleScrollLeft}>
						<FaArrowLeft />
					</button>
				)}
				<div
					className='overflow-x-scroll pb-10 no-scroll-bar'
					ref={scrollContainerRef}
				>
					<div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10'>
						{scrollerTwoData.map(item => (
							<Card key={item.id} item={item} />
						))}
					</div>
				</div>
				{showRightArrow && (
					<button onClick={handleScrollRight}>
						<FaArrowRight />
					</button>
				)}
			</div>
		</div>
	);
};

export default ScrollerTwo;
