import React from 'react';
import { BsFillSendFill } from "react-icons/bs";
import Container from '../Container/Container';
const SubscribeEmail = () => {
    return (
        <div >
			<div className='-mb-16' >
				<Container>
				<section className="py-6 card bg-[#d4d6d8] sm:rounded-full rounded-3xl  shadow-gray-400">
					<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-5 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
						<div className="flex flex-col justify-center text-center ">
							<p className="sm:text-3xl text-xl font-semibold">Subscribe for the Exclusive Updates!</p>
						</div>
						<div className="flex flex-col items-center  sm:flex-row justify-center flex-shrink-0 lg:justify-end">
							<div className="flex flex-col sm:gap-0 gap-4 sm:flex-row px-4 sm:px-10">
								<input
									type="text"
									placeholder="Your Email Address"
									className="w-80 sm:w-96  sm:px-4 py-4 text-center sm:py-0 sm:rounded-l-full rounded-3xl"
								/>
								<button
									type="button"
									className="w-full sm:w-2/6 sm:p-3 p-2 flex items-center justify-center font-semibold sm:rounded-r-full rounded-3xl bg-[#5d98db] hover:bg-[#3b8d5d] duration-500 text-white"
								>
									<BsFillSendFill className='text-4xl px-2' />
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</section>
				</Container>
        </div>
		</div>
    );
};

export default SubscribeEmail;