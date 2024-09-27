import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';

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
	investedDate: string;
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
		investedDate: '2024-03-12',
		status: 'active',
	},
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
		investedDate: '2024-03-12',
		status: 'active',
	},
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
		investedDate: '2024-03-12',
		status: 'active',
	},
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
		investedDate: '2024-03-12',
		status: 'active',
	},
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
		investedDate: '2024-03-12',
		status: 'active',
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
		name: 'Last Investment Date',
		id: 'investedDate',
		selector: row => row.investedDate,
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
				<Link to=":investorId">
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
				</div>
				</Link>
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

export default function InvestorList() {
	return (
		<section className="mb-[2.5rem] shadow-custom">
			<header className="overflow-auto pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Investors</h3>
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
			<div>
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
