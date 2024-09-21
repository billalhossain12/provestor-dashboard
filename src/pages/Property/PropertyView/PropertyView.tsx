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

			
		</main>
	);
}
