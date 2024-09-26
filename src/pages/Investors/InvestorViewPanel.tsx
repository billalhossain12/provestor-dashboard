import { Icon } from '@iconify/react/dist/iconify.js';
import { Outlet, useNavigate } from 'react-router-dom';
import InvestorViewCards from './InvestorViewCards';
import Tabs from './Tabs/Tabs';

export default function InvestorViewPanel() {
	const navigate = useNavigate();
	return (
		<main className='mb-[2.5rem]'>
			<div className='flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-3 mb-[3rem]'>
            <div className="flex items-center md:gap-[2rem] gap-[1rem]">
				<div
					onClick={() => navigate(-1)}
					className="flex items-center md:gap-3 gap-2 border-[1px] border-gray-300 md:px-4 px-2 py-1 cursor-pointer"
				>
					<Icon className="text-[1.3rem]" icon="mingcute:left-line" />
					Back
				</div>
				<h3 className="md:text-[1.25rem] text-[1rem] font-semibold">
					Investor ID : 12345
				</h3>
			</div>
            <div className='flex md:flex-row flex-col md:items-center gap-3'>
                <button className='md:px-8 px-5 py-2 bg-primary text-white'>Add dividends and net returns</button>
                <button className='md:px-8 px-5 py-2 bg-red-500 text-white'>Block Investor</button>
            </div>
            </div>
            <InvestorViewCards/>
			<Tabs/>
            <Outlet/>
		</main>
	);
}
