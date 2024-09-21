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
import CareerPanel from '../pages/Careers/CareerPanel';
import AddCareerForm from '../pages/Careers/AddCareerForm/AddCareerForm';
import CareerView from '../pages/Careers/CareerView/CareerView';
import EditFaqForm from '../pages/FAQ/EditFaqForm/EditFaqForm';
import AddFaqForm from '../pages/FAQ/AddFaqForm/AddFaqForm';
import Users from '../pages/Users/Users';
import UsersPanel from '../pages/Users/UsersPanel';
import BlockedUsersList from '../pages/Users/BlockedUsersList/BlockedUsersList';
import NotFound from '../pages/NotFound/NotFound';
import NotificationPanel from '../pages/Notifications/NotificationPanel';
import SendNotificationForm from '../pages/Notifications/SendNotificationForm/SendNotificationForm';
import EditNotificationForm from '../pages/Notifications/EditNotificationForm/EditNotificationForm';
import PropertyPanel from '../pages/Property/PropertyPanel';
import PropertyView from '../pages/Property/PropertyView/PropertyView';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement:<NotFound/>,
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
				path: 'users',
				element: <UsersPanel />,
				children:[
					{
						path:'',
						element:<Users/>
					},
					{
						path:'blocked-users',
						element:<BlockedUsersList/>
					},
				]
			},
			{
				path: 'property',
				element: <PropertyPanel />,
				children:[
					{
						path:'',
						element:<Property/>
					},
					{
						path:':propertyId',
						element:<PropertyView/>
					}
				]
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
				element: <NotificationPanel />,
				children:[
					{
						path:'',
						element:<SendNotificationForm/>
					},
					{
						path:':notificationId',
						element:<EditNotificationForm/>
					},
				]
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
