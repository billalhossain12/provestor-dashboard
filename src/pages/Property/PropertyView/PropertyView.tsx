import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PropertyView() {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<main>
			<div className="flex items-center md:gap-[2rem] gap-[1rem] mb-[3rem]">
				<div
					onClick={() => navigate(-1)}
					className="flex items-center md:gap-3 gap-2 border-[1px] border-gray-300 md:px-4 px-2 py-1 cursor-pointer"
				>
					<Icon className="text-[1.3rem]" icon="mingcute:left-line" />
					Back
				</div>
				<h3 className="md:text-[1.25rem] text-[1rem] font-semibold">
					Property ID : 12345
				</h3>
			</div>

			{/* section 1  */}
			<section className='grid lg:grid-cols-2 grid-cols-1 gap-[1.5rem]'>
				{/* item - 1  */}
				<div className='shadow-custom p-[1rem]'>
				<div className='flex items-center justify-between'>
					<div>
					<h3 className='text-[1.25rem] font-semibold'>Hallmark Skyrena (2015)</h3>
					<p className='text-[14px] mt-1'>Created on <span className='font-semibold'>12 Sept 2023</span></p>
					</div>
					<div className='bg-[#25BF1733] px-3 py-1 flex items-center gap-1 text-[12px]'><p className='rounded-full w-[8px] h-[8px] bg-primary'></p>Open</div>
				</div>

				<div className='flex items-center gap-5 mt-[1rem]'>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Propery ID</h5>
						<p className='font-semibold'>1231231231231</p>
					</div>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Type</h5>
						<p className='font-semibold'>Residential</p>
					</div>
				</div>
				</div>



				{/* item - 2  */}
				<div className='shadow-custom p-[1rem]'>
				<div className='flex items-center gap-5 mt-[1rem]'>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Ownership</h5>
						<p className='font-semibold'>Billal Hossain</p>
					</div>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Area</h5>
						<p className='font-semibold'>1472 SQ FT</p>
					</div>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Beds & Bath</h5>
						<p className='font-semibold'>3BHK</p>
					</div>
				</div>

					<div className='space-y-[0.3rem] mt-[1rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Address</h5>
						<p className='font-semibold'>Hitech city, Hyderabad, Telangana, India - 500074</p>
					</div>
				</div>



				{/* item - 3  */}
				<div className='shadow-custom p-[1rem]'>
				<div className='flex items-center gap-5 mt-[1rem]'>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Price</h5>
						<p className='font-semibold'>₹1,50,00,000</p>
					</div>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Total Shares</h5>
						<p className='font-semibold'>15000</p>
					</div>
					<div className='space-y-[0.3rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Per Share Value</h5>
						<p className='font-semibold'>₹1,000</p>
					</div>
				</div>

					<div className='space-y-[0.3rem] mt-[1rem]'>
						<h5 className='text-[14px] text-[#8B8D97]'>Risk Scale</h5>
						<p className='font-semibold text-[#FFCE05]'>Medium Risk</p>
					</div>
				</div>
			</section>
		</main>
	);
}
