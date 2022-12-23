interface Props {}

const ScrollerThree = (props: Props) => {
	return (
		<div className='container flex-grow w-full py-4 sm:py-16 mx-auto px-0'>
			<div className='mx-auto w-full md:w-4/5 px-4'>
				<div className='container my-8'>
					<div className='flex justify-between items-center mb-4'>
						<h2 className='text-3xl font-medium'>
							Category one
							<a href='#' className=''>
								<span className='text-salmon font-medium text-lg ml-2 hover:underline'>
									See all
								</span>
							</a>
						</h2>
						<div>
							<button className='cursor-pointer text-xl mx-1 text-indigo-600 font-bold'>
								back
							</button>
							<button className='cursor-pointer text-xl mx-1 text-indigo-600 font-bold'>
								forward
							</button>
						</div>
					</div>
					<div
						id='scrollContainer'
						className='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8'
					>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg'>
							<a href='#' className='space-y-4'>
								<div className='aspect-w-16 aspect-h-9'>
									<img
										className='object-cover shadow-md hover:shadow-xl rounded-lg'
										src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
										alt=''
									/>
								</div>
								<div className='px-4 py-2'>
									<div className='text-lg leading-6 font-medium space-y-1'>
										<h3 className='font-bold text-gray-800 text-3xl mb-2'>
											Some title goes here
										</h3>
									</div>
									<div className='text-lg'>
										<p className=''>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ad recusandae, consequatur corrupti vel quisquam id itaque
											nam
										</p>
										<p className='font-medium text-sm text-indigo-600 mt-2'>
											Read more
											<span className='text-indigo-600'>&hellip;</span>
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollerThree;
