import { Outlet } from 'react-router-dom';
import NotificationList from './NotificationList/NotificationList';

export default function NotificationPanel() {
	return (
		<main className="bg-white shadow-custom p-[1rem] m-[2px]">
			<Outlet />
			<NotificationList />
		</main>
	);
}
