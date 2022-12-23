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
		<div className='container flex-grow w-full mx-auto'>
			<div className='mx-auto w-full md:w-4/5 px-16 relative'>
				{showLeftArrow && (
					<button
						className='absolute top-[50%] left-0'
						onClick={handleScrollLeft}
					>
						<FaArrowLeft />
					</button>
				)}
				<div className='container my-8'>
					<div
						className='flex flex-nowrap overflow-x-scroll scrolling-touch items-start mb-8'
						ref={scrollContainerRef}
					>
						{scrollerThreeData.map(item => (
							<Card key={item.id} item={item} />
						))}
					</div>
				</div>
				{showRightArrow && (
					<button
						className='absolute top-[50%] right-0'
						onClick={handleScrollRight}
					>
						<FaArrowRight />
					</button>
				)}
			</div>
		</div>
	);
};

export default ScrollerThree;
