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

type TInvestedDetails = {
	shares: number;
	invested: number;
};

type TDataRow = {
	investorId: string;
	investorDetails: TUserDetails;
	investedDetails: TInvestedDetails;
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
		investorId: 'X7y8Z9a1',
		investorDetails: {
			name: 'John Doe',
			email: 'john.doe@example.com',
			phone: '555-10002',
		},
		investedDetails: {
			shares: 20,
			invested: 60000,
		},
		onboardingDate: '2024-09-12',
		status: 'active',
	},
	{
		investorId: 'B4c5D6e7',
		investorDetails: {
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			phone: '555-10003',
		},
		investedDetails: {
			shares: 10,
			invested: 30000,
		},
		onboardingDate: '2024-09-13',
		status: 'inactive',
	},
	{
		investorId: 'F1g2H3i4',
		investorDetails: {
			name: 'Michael Johnson',
			email: 'michael.j@example.com',
			phone: '555-10004',
		},
		investedDetails: {
			shares: 25,
			invested: 75000,
		},
		onboardingDate: '2024-09-14',
		status: 'active',
	},
	{
		investorId: 'J5k6L7m8',
		investorDetails: {
			name: 'Emily Davis',
			email: 'emily.davis@example.com',
			phone: '555-10005',
		},
		investedDetails: {
			shares: 30,
			invested: 90000,
		},
		onboardingDate: '2024-09-15',
		status: 'inactive',
	},
	{
		investorId: 'N8o9P1q2',
		investorDetails: {
			name: 'Chris Wilson',
			email: 'chris.wilson@example.com',
			phone: '555-10006',
		},
		investedDetails: {
			shares: 12,
			invested: 36000,
		},
		onboardingDate: '2024-09-16',
		status: 'active',
	},
	{
		investorId: 'R2s3T4u5',
		investorDetails: {
			name: 'Anna Brown',
			email: 'anna.brown@example.com',
			phone: '555-10007',
		},
		investedDetails: {
			shares: 18,
			invested: 54000,
		},
		onboardingDate: '2024-09-17',
		status: 'inactive',
	},
	{
		investorId: 'V5w6X7y8',
		investorDetails: {
			name: 'David Lee',
			email: 'david.lee@example.com',
			phone: '555-10008',
		},
		investedDetails: {
			shares: 22,
			invested: 66000,
		},
		onboardingDate: '2024-09-18',
		status: 'active',
	},
	{
		investorId: 'Z9a1B2c3',
		investorDetails: {
			name: 'Sarah Moore',
			email: 'sarah.moore@example.com',
			phone: '555-10009',
		},
		investedDetails: {
			shares: 14,
			invested: 42000,
		},
		onboardingDate: '2024-09-19',
		status: 'inactive',
	},
	{
		investorId: 'D3e4F5g6',
		investorDetails: {
			name: 'James Taylor',
			email: 'james.taylor@example.com',
			phone: '555-10010',
		},
		investedDetails: {
			shares: 28,
			invested: 84000,
		},
		onboardingDate: '2024-09-20',
		status: 'active',
	},
	{
		investorId: 'H7i8J9k1',
		investorDetails: {
			name: 'Olivia Anderson',
			email: 'olivia.anderson@example.com',
			phone: '555-10011',
		},
		investedDetails: {
			shares: 16,
			invested: 48000,
		},
		onboardingDate: '2024-09-21',
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
		name: 'Investor ID',
		id: 'investorId',
		selector: row => row.investorId,
		center: true,
		grow: 1,
	},
	{
		name: 'Investor Details',
		id: 'investorDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>{row.investorDetails.name}</p>
				<p>{row.investorDetails.email}</p>
				<p>{row.investorDetails.phone}</p>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Invested',
		id: 'investedDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>
					<span className="font-semibold">Shares:-</span>
					{row.investedDetails.shares}
				</p>
				<p>
					<span className="font-semibold">Invested:-</span>
					{row.investedDetails.invested}
				</p>
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
					<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
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

export default function TopInvestorReportList() {
	return (
		<section className="mb-[2.5rem] shadow-custom">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Top Investors</h3>
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
