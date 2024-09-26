import { Icon } from '@iconify/react/dist/iconify.js';
import profilePhoto from '../../assets/profile-photo.jpg';
export default function InvestorViewCards() {
	return (
		<>
			<section className="mb-[2.5rem]">
				<div className="flex flex-wrap gap-[2rem] mb-[2rem]">
					<img
						className="md:w-[200px] w-full h-[155px] shadow-custom"
						src={profilePhoto}
						alt="Invesotr Image"
					/>

					<div className="bg-white shadow-custom p-[1rem] md:max-w-[500px] w-full">
						<div className="flex md:items-center md:justify-between md:flex-row flex-col md:gap-0 gap-3">
							<div className='flex items-center gap-3'>
							<div className="bg-[#24B24B26] p-1 rounded-md text-primary w-[40px]">
								<Icon className="text-[1.8rem]" icon="mdi:user" />
							</div>
							<div>
								<h3 className="text-[1.25rem] font-semibold">Billal Hossain</h3>
								<p className="text-[14px]">
									<span className='text-gray-600'>Created on</span> <span className="font-medium">10 Jan 2024</span>
								</p>
							</div>
							</div>
							<div className="flex items-center gap-3 bg-[#24B24B26] rounded-md w-[100px] px-4 py-1">
								<p className="bg-primary h-[10px] w-[10px] rounded-full"></p>
								<p>Active</p>
							</div>
						</div>
						<div className="flex md:justify-between md:items-center flex-wrap md:flex-row flex-col md:gap-0 gap-3 mt-8">
							<div>
								<h5 className="text-[#8B8D97] text-[14px]">Email ID:</h5>
								<p className="font-medium">billal.hossain@gmail.com</p>
							</div>
							<div>
								<h5 className="text-[#8B8D97] text-[14px]">Mobile Number:</h5>
								<p className="font-medium">+8801311123533</p>
							</div>
						</div>
					</div>
				</div>




				<div className="bg-white p-[1rem] shadow-custom flex-1">
					<div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
						<div>
							<h5 className="text-[#8B8D97] text-[14px]">Nationality:</h5>
							<p className="font-medium">Bangladeshi</p>
						</div>
						<div>
							<h5 className="text-[#8B8D97] text-[14px]">Date Of Birth:</h5>
							<p className="font-medium">30/03/1997</p>
						</div>
						<div>
							<h5 className="text-[#8B8D97] text-[14px]">Gender:</h5>
							<p className="font-medium">Male</p>
						</div>
						<div>
							<h5 className="text-[#8B8D97] text-[14px]">
								Last Investment Date:
							</h5>
							<p className="font-medium">25/09/2024</p>
						</div>
						<div className="md:col-span-2">
							<h5 className="text-[#8B8D97] text-[14px]">Address:</h5>
							<p className="font-medium">Halder Bazar, Charvaga, Sharaitpur.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] mb-[2.5rem]">
				{/* item- 1  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<h3 className="text-[#858585] font-semibold mb-3">Total Shares</h3>
					<div className="flex justify-between items-center">
						<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">500</h1>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="raphael:piechart"
							/>
						</div>
					</div>
				</div>
				{/* item- 2  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<div className="flex items-center justify-between flex-wrap mb-2">
						<h3 className="text-[#858585] font-semibold mb-3">
							Total Investment
						</h3>
						<div className="flex items-center gap-1 text-primary text-[14px]">
							<Icon icon="mdi:dollar" />
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
				{/* item- 3  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<h3 className="text-[#858585] font-semibold mb-3">Total Dividends</h3>
					<div className="flex justify-between items-center">
						<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">100</h1>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="raphael:piechart"
							/>
						</div>
					</div>
				</div>
				{/* item- 4  */}
				<div className="shadow-custom p-[1.25rem] bg-white">
					<h3 className="text-[#858585] font-semibold mb-3">
						Total Net Returns
					</h3>
					<div className="flex justify-between items-center">
						<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">200</h1>
						<div className="bg-primary inline-block p-1">
							<Icon
								className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
								icon="mdi:dollar"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
