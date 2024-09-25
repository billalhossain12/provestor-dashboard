import { Icon } from '@iconify/react/dist/iconify.js';

export default function PropertyReportCards() {
	return (
		<section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] mb-[2.5rem]">
			{/* item- 1  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Total Properties</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">500</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="mdi:land-plots-marker"
						/>
					</div>
				</div>
			</div>
			{/* item- 2  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Active Properties</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">100</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="mdi:land-plots-marker"
						/>
					</div>
				</div>
			</div>

			{/* item- 3  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<div className="flex items-center justify-between flex-wrap mb-2">
					<h3 className="text-[#858585] font-semibold mb-3">
						Total Investments
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
			{/* item- 4  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<div className="flex items-center justify-between flex-wrap mb-2">
					<h3 className="text-[#858585] font-semibold mb-3">Total Profit</h3>
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
		</section>
	);
}
