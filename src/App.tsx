import ScrollerOne from './ScrollerOne/ScrollerOne';
import { data as ScrollerOneData } from './ScrollerOne/data';

const App = () => {
	return (
		<div>
			<ScrollerOne items={ScrollerOneData} />
		</div>
	);
};

export default App;
