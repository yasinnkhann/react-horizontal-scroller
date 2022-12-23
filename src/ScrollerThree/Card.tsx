import { IScrollerThreeItem } from './scrollerThreeData';

interface Props {
	item: IScrollerThreeItem;
}

const Card = ({ item }: Props) => {
	return (
		<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
			<a href='#' className='space-y-4'>
				<div className='aspect-w-16 aspect-h-9'>
					<img
						className='object-cover shadow-md hover:shadow-xl rounded-lg'
						src={item.src}
						alt=''
					/>
				</div>
				<div className='px-4 py-2'>
					<div className='text-lg leading-6 font-medium space-y-1'>
						<h3 className='font-bold text-gray-800 text-3xl mb-2'>
							{item.title}
						</h3>
					</div>
					<div className='text-lg'>
						<p className=''>{item.bio}</p>
						<p className='font-medium text-sm text-indigo-600 mt-2'>
							Read more
							<span className='text-indigo-600'>&hellip;</span>
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Card;
