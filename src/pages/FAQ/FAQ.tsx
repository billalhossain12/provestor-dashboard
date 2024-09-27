import { Outlet } from 'react-router-dom';
import FaqList from './FaqList/FaqList';

export default function FAQ() {
	return (
		<main className="bg-white h-[99%] shadow-custom p-[1rem] m-[2px]">
			<h3 className="text-[1.25rem] font-medium mb-[2rem]">FAQs</h3>
			<Outlet/>
			<FaqList />
		</main>
	);
}
