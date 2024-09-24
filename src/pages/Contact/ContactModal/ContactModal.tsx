import { useState } from 'react';
import {
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';

export function ContactModal() {
	const [size, setSize] = useState<
		null | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xs'
	>();

	const handleOpen = (value: null | 'xl') => setSize(value);

	return (
		<>
			<div
				onClick={() => handleOpen('xl')}
				className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer"
			>
				<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
			</div>
			<div>
				<Dialog
					open={
						size === 'xs' ||
						size === 'sm' ||
						size === 'md' ||
						size === 'lg' ||
						size === 'xl' ||
						size === 'xxl'
					}
					size={size || 'md'}
					handler={handleOpen}
				>
					<DialogHeader className="flex justify-end">
						<div
							onClick={() => handleOpen(null)}
							className="text-red-500 bg-[#FF00231A] border-[1px] border-red-500 cursor-pointer p-1 hover:bg-red-500 hover:text-white duration-300"
						>
							<Icon icon="gridicons:cross" />
						</div>
					</DialogHeader>
					<DialogBody className="lg:h-auto h-[22rem] overflow-scroll">
						<h3 className="md:text-[28px] text-[1rem] font-bold md:mb-[2.5rem] mb-[1rem]">
							Enquiry ID : 1238971293
						</h3>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-[2rem] mb-[1rem]">
							<div>
								<h5 className="text-[12px] font-bold text-[#8B8D97]">
									Enquiry ID
								</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									12345
								</p>
							</div>
							<div>
								<h5 className="text-[12px] font-bold text-[#8B8D97]">
									Details
								</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									Billal Hossain
								</p>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									billa.hossain@gmail.com
								</p>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									+8801311123533
								</p>
							</div>
							<div>
								<h5 className="text-[12px] font-bold text-[#8B8D97]">
									Enquiry Date
								</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									30/03/2025
								</p>
							</div>
						</div>

						<div>
							<h5 className="text-[12px] text-[#8B8D97]">Message</h5>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Exercitationem repellat, a ipsum ut autem alias debitis neque
								qui repellendus optio perspiciatis nam possimus excepturi quos
								maiores officia omnis cumque nesciunt delectus libero dicta.
								Voluptatibus tempore dolorum nostrum iusto natus sequi explicabo
								iure numquam suscipit!
							</p>
						</div>
					</DialogBody>
					<DialogFooter>
						<button
							color=""
							onClick={() => handleOpen(null)}
							className="bg-primary text-white px-4 py-2"
						>
							<span>Resolved</span>
						</button>
					</DialogFooter>
				</Dialog>
			</div>
		</>
	);
}
