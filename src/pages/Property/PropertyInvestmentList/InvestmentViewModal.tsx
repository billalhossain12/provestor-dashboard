import { useState } from 'react';
import {
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';

export function InvestmentViewModal() {
	const [size, setSize] = useState<string | null>(null);

	const handleOpen = (value: string | null) => setSize(value);
	const props: any = undefined;

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
					{...props}
				>
					<DialogHeader className="flex justify-end" {...props}>
						<div
							onClick={() => handleOpen(null)}
							className="text-red-500 bg-[#FF00231A] border-[1px] border-red-500 cursor-pointer p-1 hover:bg-red-500 hover:text-white duration-300"
						>
							<Icon icon="gridicons:cross" />
						</div>
					</DialogHeader>
					<DialogBody
						{...props}
						className="lg:h-auto h-[22rem] overflow-scroll"
					>
						<h3 className="md:text-[28px] text-[1.2rem] font-bold md:mb-[2.5rem] mb-[1rem]">
							Transaction ID : 1238971293
						</h3>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-[2rem] mb-[1rem]">
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Investor ID</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									12345
								</p>
							</div>
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Investor Name</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									Billal Hossain
								</p>
							</div>
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">
									Investor Details
								</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									billahossain@gmail.com
								</p>
							</div>
						</div>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-[2rem] mb-[1rem]">
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Invested Date</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									04/01/2024
								</p>
							</div>
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Shares</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									Shares :- 1500
								</p>
							</div>
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Invested</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									Invested :- ₹559.25k
								</p>
							</div>
						</div>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-[2rem] mb-[1rem]">
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">Tenure</h5>
								<p className="md:text-[1.5rem] text-[1rem] font-semibold">
									5 years
								</p>
							</div>
							<div>
								<h5 className="text-[1.25rem] text-[#8B8D97]">
									Payment status
								</h5>
								<div className="md:text-[1.5rem] text-[1rem] font-semibold text-[#037847] flex items-center gap-2 bg-[#ECFDF3] px-4 py-2 rounded-full w-[160px]">
                                    <p className='rounded-full w-[8px] h-[8px] bg-[#037847]'></p>
									<p>Success</p>
								</div>
							</div>
						</div>
					</DialogBody>
					<DialogFooter {...props}>
						<button
							{...props}
							variant="gradient"
							color=""
							onClick={() => handleOpen(null)}
							className="bg-primary text-white px-4 py-2 flex items-center gap-2"
						>
							<Icon className='text-[1.3rem]' icon="material-symbols:cloud-download" />
							<span>Download Receipt</span>
						</button>
					</DialogFooter>
				</Dialog>
			</div>
		</>
	);
}
