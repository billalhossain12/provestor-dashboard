import { Outlet } from 'react-router-dom';

export default function PropertyViewPanel() {
	return (
		<main className='mx-[2px]'>
			<Outlet />
		</main>
	);
}
