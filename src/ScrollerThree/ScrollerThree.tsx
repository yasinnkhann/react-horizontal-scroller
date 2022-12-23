import { useRef } from 'react';
import Card from './Card';
import { scrollerThreeData } from './scrollerThreeData';
import useScrollerArrows from './useScrollerArrows';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ScrollerThree = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const { showLeftArrow, showRightArrow } =
		useScrollerArrows(scrollContainerRef);

	const handleScrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft - 300,
				behavior: 'smooth',
			});
		}
	};

	const handleScrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft + 300,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className='container flex-grow w-full py-4 sm:py-16 mx-auto px-0'>
			<button onClick={handleScrollLeft}>
				<FaArrowLeft />
			</button>
			<div className='mx-auto w-full md:w-4/5 px-4'>
				<div className='container my-8'>
					<div
						className='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8'
						ref={scrollContainerRef}
					>
						{scrollerThreeData.map(item => (
							<Card key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
			<button onClick={handleScrollRight}>
				<FaArrowRight />
			</button>
		</div>
	);
};

export default ScrollerThree;
