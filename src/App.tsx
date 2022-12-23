import ScrollerOne from './ScrollerOne/ScrollerOne';
import ScrollerTwo from './ScrollerTwo/ScrollerTwo';

const App = () => {
	return (
		<div>
			<h1 className='flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800'>
				Scroller One
			</h1>
			<ScrollerOne />
			<h1 className='flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800'>
				Scroller Two
			</h1>
			<ScrollerTwo />
		</div>
	);
};

export default App;
