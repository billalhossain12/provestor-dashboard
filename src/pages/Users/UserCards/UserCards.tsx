import { Icon } from '@iconify/react/dist/iconify.js';

export default function UserCards() {
	return (
		<section className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-[2rem] mb-[2.5rem]">
			{/* item- 1  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Total Users</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">500</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="heroicons:user-group-solid"
						/>
					</div>
				</div>
			</div>
			{/* item- 2  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Active Users</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">100</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="heroicons:user-group-solid"
						/>
					</div>
				</div>
			</div>
			{/* item- 3  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Inactive Users</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
						200
					</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="heroicons:user-group-solid"
						/>
					</div>
				</div>
			</div>
			{/* item- 4  */}
			<div className="shadow-custom p-[1.25rem] bg-white">
				<h3 className="text-[#858585] font-semibold mb-3">Blocked Users</h3>
				<div className="flex justify-between items-center">
					<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
						200
					</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="heroicons:user-group-solid"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
