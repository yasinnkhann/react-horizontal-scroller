import { useState, useEffect } from 'react';

export default function useScrollerArrows(
	scrollContainerRef: React.RefObject<HTMLDivElement>
) {
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

	return { showLeftArrow, showRightArrow };
}
