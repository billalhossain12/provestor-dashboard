import { Icon } from '@iconify/react/dist/iconify.js';
import ReactSlider from 'react-slider';
export default function PropertyOverViewCards() {
	return (
		<section className="mb-[2.5rem]">
			<div className="flex justify-between items-center mb-[2rem]">
				<h3 className="text-[1.25rem] font-medium">Property</h3>
				<div className="bg-primary px-3 py-1 flex items-center gap-1 text-white">
					<p>Property Name</p>
					<Icon icon="iconoir:nav-arrow-down" />
				</div>
			</div>
			<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[2rem]">
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
		</section>
	);
}
