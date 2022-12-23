import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import { scrollerTwoData } from './scrollerTwoData';

const ScrollerTwo = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [showLeftArrow, setShowLeftArrow] = useState(false);
	const [showRightArrow, setShowRightArrow] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollContainerRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } =
					scrollContainerRef.current;
				setShowLeftArrow(scrollLeft > 0);
				setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
			}
		};
		handleScroll();
		scrollContainerRef.current?.addEventListener('scroll', handleScroll);
		return () =>
			scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
	}, []);

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
		<div className='flex flex-col bg-white m-auto p-auto relative'>
			<div className='flex'>
				{showLeftArrow && <button onClick={handleScrollLeft}>&lt;</button>}
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
				{showRightArrow && <button onClick={handleScrollRight}>&gt;</button>}
			</div>
		</div>
	);
};

export default ScrollerTwo;
