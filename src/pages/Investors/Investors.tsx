import { Link } from 'react-router-dom';
import InvestorList from './InvestorList';
import InvestorCards from './InvestorCards';

export default function Investors() {
	return (
		<main className='mx-[2px]'>
			<div className="flex items-center justify-between mb-[2rem]">
				<h3 className="text-[1.25rem] font-medium">Investors</h3>
				<Link to="blocked-investors">
					<button className="flex items-center justify-center gap-3 bg-primary px-8 py-2 text-white">
						Blocked Investors
					</button>
				</Link>
			</div>
			<InvestorCards />
			<InvestorList />
		</main>
	);
}
