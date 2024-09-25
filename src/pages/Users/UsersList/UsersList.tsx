import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TUserDetails = {
	name: string;
	email: string;
	phone: string;
};

type TDataRow = {
	userId: string;
	userDetails: TUserDetails;
	onboardingDate: string;
	status: string;
};

const customStyles: TableStyles = {
	headRow: {
		style: {
			fontWeight: 600,
			padding: '10px 10px',
			color: '#212529',
			textAlign: 'left',
		},
	},
	head: {
		style: {
			// borderRadius: "6px 6px 0px 0px",
			borderTop: '0.824px solid #E9E9E9',
			background: '#FFF',
			fontSize: '15px',
		},
	},

	rows: {
		style: {
			// borderRadius: "6px 6px 0px 0px",
			// borderTop: "0.824px solid #E9E9E9",
			background: '#FFF',
			color: '#565656',
			padding: '10px 10px',
			fontSize: '14px',
			fontWeight: 400,
			width: 'auto',
		},
	},
	pagination: {
		style: {
			boxShadow: '10px 5px 5px #ddd',
			marginBottom: '5px',
		},
	},
	table: {
		style: {
			overflow: 'visible',
			minWidth: '1100px',
		},
	},
	tableWrapper: {
		style: {
			overflow: 'visible',
		},
	},
	responsiveWrapper: {
		style: {
			overflowX: 'auto', // table scroll on x axis
		},
	},
};

const data = [
	{
		userId: 'A1b2C3d4',
		userDetails: {
			name: 'User 1',
			email: 'user1@example.com',
			phone: '555-10001',
		},
		onboardingDate: '2024-09-11',
		status: 'active',
	},
	{
		userId: 'E5f6G7h8',
		userDetails: {
			name: 'User 2',
			email: 'user2@example.com',
			phone: '555-10002',
		},
		onboardingDate: '2024-09-12',
		status: 'inactive',
	},
	{
		userId: 'I9j0K1l2',
		userDetails: {
			name: 'User 3',
			email: 'user3@example.com',
			phone: '555-10003',
		},
		onboardingDate: '2024-09-13',
		status: 'active',
	},
	{
		userId: 'M3n4O5p6',
		userDetails: {
			name: 'User 4',
			email: 'user4@example.com',
			phone: '555-10004',
		},
		onboardingDate: '2024-09-14',
		status: 'inactive',
	},
	{
		userId: 'Q7r8S9t0',
		userDetails: {
			name: 'User 5',
			email: 'user5@example.com',
			phone: '555-10005',
		},
		onboardingDate: '2024-09-15',
		status: 'active',
	},
	{
		userId: 'U1v2W3x4',
		userDetails: {
			name: 'User 6',
			email: 'user6@example.com',
			phone: '555-10006',
		},
		onboardingDate: '2024-09-16',
		status: 'inactive',
	},
	{
		userId: 'Y5z6A7b8',
		userDetails: {
			name: 'User 7',
			email: 'user7@example.com',
			phone: '555-10007',
		},
		onboardingDate: '2024-09-17',
		status: 'active',
	},
	{
		userId: 'C9d0E1f2',
		userDetails: {
			name: 'User 8',
			email: 'user8@example.com',
			phone: '555-10008',
		},
		onboardingDate: '2024-09-18',
		status: 'inactive',
	},
	{
		userId: 'G3h4I5j6',
		userDetails: {
			name: 'User 9',
			email: 'user9@example.com',
			phone: '555-10009',
		},
		onboardingDate: '2024-09-19',
		status: 'active',
	},
	{
		userId: 'K7l8M9n0',
		userDetails: {
			name: 'User 10',
			email: 'user10@example.com',
			phone: '555-10010',
		},
		onboardingDate: '2024-09-20',
		status: 'inactive',
	},
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => (index as number) + 1,
		center: true,
		maxWidth: '0.3rem',
	},
	{
		name: 'User ID',
		id: 'userId',
		selector: row => row.userId,
		center: true,
		grow: 1,
	},
	{
		name: 'User Details',
		id: 'userDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>{row.userDetails.name}</p>
				<p>{row.userDetails.email}</p>
				<p>{row.userDetails.phone}</p>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Onboarding Date',
		id: 'onboardingDate',
		selector: row => row.onboardingDate,
		grow: 1,
	},
	{
		name: 'Status',
		id: 'status',
		cell: row => <p>{row.status}</p>,
		grow: 1,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="mdi:user-block" />
				</div>
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon
						className="text-[1.5rem]"
						icon="material-symbols:delete-rounded"
					/>
				</div>
			</div>
		),
		center: true,
		grow: 1,
	},
];

export default function UsersList() {
	return (
		<section className="mb-[2.5rem] shadow-custom">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Users</h3>
					<div className="flex items-center gap-[2.5rem] flex-wrap">
						<div>
							<div className="relative">
								<input
									className="outline-none border-[1px] border-[#D9D9D9] pl-[2.5rem] pr-[1rem] py-[0.5rem] md:w-auto w-full"
									type="text"
									placeholder="Search here..."
								/>
								<Icon
									className="absolute left-2 top-[9px] text-primary text-[1.5rem]"
									icon="mingcute:search-fill"
								/>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<Icon className="text-[1.3rem]" icon="mdi:filter-outline" />
							<p>Filter</p>
						</div>
						<div className="flex items-center gap-1">
							<Icon className="text-[1.3rem]" icon="lets-icons:date-range" />
							<p>Date</p>
						</div>
						<div className="flex items-center gap-1">
							<p>Status</p>
							<Icon className="text-[1.3rem]" icon="iconoir:nav-arrow-down" />
						</div>
						<button className="bg-primary px-3 py-1 text-white flex items-center gap-2">
							<span>Export</span>
							<Icon icon="material-symbols:cloud-download" />
						</button>
					</div>
				</div>
			</header>

			{/* Table  */}
			<div className="xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw]">
				<DataTable
					columns={columns.map(column => ({
						...column,
						name: (
							<div className="flex items-center justify-between">
								<span>{column.name}</span>
								{column.name == 'Invested' && (
									<Icon icon="solar:sort-outline" />
								)}
								{column.name == 'Payment Status' && (
									<Icon icon="solar:sort-outline" />
								)}
							</div>
						),
					}))}
					data={data}
					customStyles={customStyles}
					paginationPerPage={10}
					pagination
					progressPending={false}
				/>
			</div>
		</section>
	);
}
