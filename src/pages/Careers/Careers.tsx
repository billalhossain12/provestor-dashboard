import { Icon } from '@iconify/react/dist/iconify.js';
import CareerList from './CareerList/CareerList';
import { Link } from 'react-router-dom';

export default function Careers() {
	return (
		<section>
			<div className='flex items-center justify-between mb-[2rem]'>
				<h3 className="text-[1.25rem] font-medium">Career</h3>
				<Link to="add-career">
				<button className='flex items-center text-[18px] font-bold justify-center gap-3 bg-primary px-8 py-2 text-white'>
					<Icon className='text-[1.3rem]' icon="ic:twotone-plus" />
					<p>Add Career</p>
				</button>
				</Link>
			</div>
			<CareerList />
		</section>
	);
}
