import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactSlider from 'react-slider';
import PropertyInvestmentList from '../PropertyInvestmentList/PropertyInvestmentList';

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

			{/* Section 1  */}
			<section className="grid lg:grid-cols-2 grid-cols-1 gap-[1.5rem] mb-[2.5rem]">
				{/* item - 1  */}
				<div className="shadow-custom p-[1rem] bg-white">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-[1.25rem] font-semibold">
								Hallmark Skyrena (2015)
							</h3>
							<p className="text-[14px] mt-1">
								Created on <span className="font-semibold">12 Sept 2023</span>
							</p>
						</div>
						<div className="bg-[#25BF1733] px-3 py-1 flex items-center gap-1 text-[12px]">
							<p className="rounded-full w-[8px] h-[8px] bg-primary"></p>Open
						</div>
					</div>

					<div className="flex items-center gap-5 mt-[1rem]">
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Propery ID</h5>
							<p className="font-semibold">1231231231231</p>
						</div>
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Type</h5>
							<p className="font-semibold">Residential</p>
						</div>
					</div>
				</div>

				{/* item - 2  */}
				<div className="shadow-custom p-[1rem] bg-white">
					<div className="flex items-center gap-5 mt-[1rem]">
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Ownership</h5>
							<p className="font-semibold">Billal Hossain</p>
						</div>
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Area</h5>
							<p className="font-semibold">1472 SQ FT</p>
						</div>
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Beds & Bath</h5>
							<p className="font-semibold">3BHK</p>
						</div>
					</div>

					<div className="space-y-[0.3rem] mt-[1rem]">
						<h5 className="text-[14px] text-[#8B8D97]">Address</h5>
						<p className="font-semibold">
							Hitech city, Hyderabad, Telangana, India - 500074
						</p>
					</div>
				</div>

				{/* item - 3  */}
				<div className="shadow-custom p-[1rem] bg-white">
					<div className="flex items-center gap-5 mt-[1rem]">
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Price</h5>
							<p className="font-semibold">₹1,50,00,000</p>
						</div>
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Total Shares</h5>
							<p className="font-semibold">15000</p>
						</div>
						<div className="space-y-[0.3rem]">
							<h5 className="text-[14px] text-[#8B8D97]">Per Share Value</h5>
							<p className="font-semibold">₹1,000</p>
						</div>
					</div>

					<div className="space-y-[0.3rem] mt-[1rem]">
						<h5 className="text-[14px] text-[#8B8D97]">Risk Scale</h5>
						<p className="font-semibold text-[#FFCE05]">Medium Risk</p>
					</div>
				</div>
			</section>

			{/* Section 2  */}
			<h3 className="text-[1.25rem] font-medium mb-[2rem]">Property</h3>
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[2rem] mb-[2.5rem]">
				{/* item - 1  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<h3 className="text-[#858585] font-semibold mb-3">Total Investors</h3>
					<div className="flex justify-between items-center">
						<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">200</h1>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="heroicons:user-group-solid"
							/>
						</div>
					</div>
				</div>
				{/* item - 2  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<div className="flex items-center justify-between flex-wrap mb-2">
						<h3 className="text-[#858585] font-semibold mb-3">
							Total Invested Amount
						</h3>
						<div className="flex items-center gap-1 text-primary text-[14px]">
							<Icon icon="material-symbols:trending-up" />
							<p>+16.24 %</p>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
							$500.90
						</h1>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="mdi:dollar"
							/>
						</div>
					</div>
				</div>
				{/* item - 3  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<h3 className="text-[#858585] font-semibold mb-3">
						Remaining Amount
					</h3>
					<div className="flex justify-between items-center gap-5">
						<div className="flex-1">
							<div className="flex items-center flex-wrap gap-5">
								<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
									$500.90
								</h1>
								<p className="border-[1px] border-[#0095FF] text-[#0095FF] px-2 py-1 text-[13px] rounded-lg">
									20%
								</p>
							</div>
							<ReactSlider
								className="horizontal-slider mt-3"
								trackClassName="example-track"
								min={0}
								max={5}
								value={2}
							/>
						</div>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="mdi:dollar"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Section - 3  */}
			<PropertyInvestmentList/>
		</main>
	);
}
