import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CareerView() {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<div>
			<div className="flex items-center md:gap-[2rem] gap-[1rem] mb-[3rem]">
				<div
					onClick={() => navigate(-1)}
					className="flex items-center md:gap-3 gap-2 border-[1px] border-gray-300 md:px-4 px-2 py-1 cursor-pointer"
				>
					<Icon className="text-[1.3rem]" icon="mingcute:left-line" />
					Back
				</div>
				<h3 className="md:text-[1.25rem] text-[1rem] font-semibold">
					Career ID : 12345
				</h3>
			</div>

			<div className="grid md:grid-cols-3 grid-cols-1 gap-[1.5rem]">
				<div className="space-y-[1rem] shadow-custom p-[1rem]">
					<div className="flex justify-between items-center">
						<div>
							<h3 className="text-[1.25rem] font-semibold">Content Writer</h3>
							<div className="text-[14px]">
								<span className="font-semibold">Created on</span>{' '}
								<span>12 Sept 2023</span>
							</div>
						</div>
						<div className="bg-[#25BF1733] px-2 py-1 flex items-center gap-2">
							<p className="rounded-full h-[8px] w-[8px] bg-primary"></p>
							<span className="text-[12px] text-primary">Active</span>
						</div>
					</div>
					<div className="grid grid-cols-3">
						<div>
							<h5 className="text-[#8B8D97] text-[14px] mb-1">Property ID</h5>
							<p className="font-semibold">12345</p>
						</div>
						<div>
							<h5 className="text-[#8B8D97] text-[14px] mb-1">Property ID</h5>
							<p className="font-semibold">12345</p>
						</div>
						<div>
							<h5 className="text-[#8B8D97] text-[14px] mb-1">Property ID</h5>
							<p className="font-semibold">12345</p>
						</div>
					</div>
				</div>

				<div className="md:col-span-2 shadow-custom p-[1rem]">
					<h5 className="text-[#8B8D97] text-[14px]">Job Description</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur. Tellus lobortis lectus
						ullamcorper euismod eleifend in vitae sem diam. Lorem ipsum dolor
						sit amet consectetur. Tellus lobortis lectus ullamcorper euismod
						eleifend in vitae sem diam......
					</p>
					<div className="flex justify-end items-center">
						<button className="flex items-center gap-3 text-primary">
							<span> View more </span>
							<Icon icon="ep:arrow-down" />
						</button>
					</div>
				</div>
			</div>

			<div className="bg-white shadow-custom p-[1rem] max-w-[330px] mt-[2.5rem]">
				<h5 className="text-[#858585]">Applied</h5>
				<div className="flex justify-between items-center mt-1">
					<h1 className="text-[2rem] font-semibold">200</h1>
					<div className="bg-primary inline-block p-1">
						<Icon
							className="text-[1rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
							icon="heroicons:user-group-solid"
						/>
					</div>
				</div>
			</div>

		</div>
	);
}
