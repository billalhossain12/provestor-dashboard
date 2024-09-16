import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Investors from '../pages/Investors/Investors';
import Property from '../pages/Property/Property';
import Contact from '../pages/Contact/Contact';
import Reports from '../pages/Reports/Reports';
import Notifications from '../pages/Notifications/Notifications';
import Careers from '../pages/Careers/Careers';
import Values from '../pages/Values/Values';
import Settings from '../pages/Settings/Settings';
import ChatSupport from '../pages/ChatSupport/ChatSupport';
import FAQ from '../pages/FAQ/FAQ';
import Archives from '../pages/Archives/Archives';

export const router = createBrowserRouter([
	{
		path: '/admin',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: 'investors',
				element: <Investors />,
			},
			{
				path: 'property',
				element: <Property />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'reports',
				element: <Reports />,
			},
			{
				path: 'notifications',
				element: <Notifications />,
			},
			{
				path: 'careers',
				element: <Careers />,
			},
			{
				path: 'values',
				element: <Values />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
			{
				path: 'chat-support',
				element: <ChatSupport />,
			},
			{
				path: 'faq',
				element: <FAQ />,
			},
			{
				path: 'archives',
				element: <Archives />,
			},
		],
	},
]);
