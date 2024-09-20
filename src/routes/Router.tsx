import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Investors from '../pages/Investors/Investors';
import Property from '../pages/Property/Property';
import Contact from '../pages/Contact/Contact';
import Reports from '../pages/Reports/Reports';
import Careers from '../pages/Careers/Careers';
import Values from '../pages/Values/Values';
import Settings from '../pages/Settings/Settings';
import ChatSupport from '../pages/ChatSupport/ChatSupport';
import FAQ from '../pages/FAQ/FAQ';
import Archives from '../pages/Archives/Archives';
import Notifications from '../pages/Notifications/Notifications';
import CareerPanel from '../pages/Careers/CareerPanel';
import AddCareerForm from '../pages/Careers/AddCareerForm/AddCareerForm';
import CareerView from '../pages/Careers/CareerView/CareerView';
import FaqPanel from '../pages/FAQ/FaqPanel';
import EditFaqForm from '../pages/FAQ/EditFaqForm/EditFaqForm';
import AddFaqForm from '../pages/FAQ/AddFaqForm/AddFaqForm';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: 'admin',
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
				element: <CareerPanel />,
				children:[
					{
						path:"",
						element:<Careers/>
					},
					{
						path:"add-career",
						element:<AddCareerForm/>
					},
					{
						path:":careerId",
						element:<CareerView/>
					},
				]
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
				children:[
					{
						path:'',
						element:<AddFaqForm/>
					},
					{
						path:':54365654',
						element:<EditFaqForm/>
					},
				]
			},
			{
				path: 'archives',
				element: <Archives />,
			},
		],
	},
]);
