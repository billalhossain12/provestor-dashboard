import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { AppliedViewModal } from './ContactModal';

type TInvestorDetails = {
	name: string;
	email: string;
	phone: string;
};

type TDataRow = {
	investorDetails: TInvestorDetails;
	description: string;
	date: string;
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
			color: '#667085',
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
		investorDetails: {
			name: 'John Doe',
			email: 'john.doe@example.com',
			phone: '+1-555-123-4567',
		},
		description: 'Investor in real estate and commercial properties.',
		date: '2024-08-01',
	},
	{
		investorDetails: {
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			phone: '+44-20-7946-0958',
		},
		description: 'Invests in technology startups and renewable energy.',
		date: '2024-08-05',
	},
	{
		investorDetails: {
			name: 'Michael Brown',
			email: 'michael.brown@example.com',
			phone: '+61-3-9005-8365',
		},
		description:
			'Focuses on agricultural land and organic farming investments.',
		date: '2024-08-10',
	},
	{
		investorDetails: {
			name: 'Emily Johnson',
			email: 'emily.johnson@example.com',
			phone: '+49-30-1234-5678',
		},
		description: 'Investor in luxury real estate and hospitality businesses.',
		date: '2024-08-15',
	},
	{
		investorDetails: {
			name: 'David Lee',
			email: 'david.lee@example.com',
			phone: '+82-2-555-9876',
		},
		description: 'Invests in fintech startups and blockchain technology.',
		date: '2024-08-20',
	},
	{
		investorDetails: {
			name: 'Sophia Williams',
			email: 'sophia.williams@example.com',
			phone: '+33-1-2345-6789',
		},
		description: 'Focuses on green energy projects and sustainability.',
		date: '2024-08-25',
	},
	{
		investorDetails: {
			name: 'Robert Davis',
			email: 'robert.davis@example.com',
			phone: '+1-416-555-1122',
		},
		description:
			'Invests in multi-family residential properties and rental units.',
		date: '2024-08-30',
	},
	{
		investorDetails: {
			name: 'Isabella Martinez',
			email: 'isabella.martinez@example.com',
			phone: '+34-91-555-4321',
		},
		description: 'Invests in art collections and luxury goods.',
		date: '2024-09-03',
	},
	{
		investorDetails: {
			name: 'James Wilson',
			email: 'james.wilson@example.com',
			phone: '+1-212-555-7890',
		},
		description: 'Specializes in commercial real estate and office buildings.',
		date: '2024-09-07',
	},
	{
		investorDetails: {
			name: 'Olivia Clark',
			email: 'olivia.clark@example.com',
			phone: '+81-3-555-1234',
		},
		description: 'Invests in e-commerce platforms and online marketplaces.',
		date: '2024-09-12',
	},
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => (index as number) + 1,
		center: true,
		maxWidth: '0.5rem',
	},
	{
		name: 'Investor Details',
		id: 'investorDetails',
		cell: row => (
			<div>
				<p>{row.investorDetails.name}</p>
				<p>{row.investorDetails.email}</p>
				<p>{row.investorDetails.phone}</p>
			</div>
		),
	},

	{
		name: 'Description',
		id: 'description',
		selector: row => row.description,
	},
	{
		name: 'Applied Date',
		id: 'appliedDate',
		selector: row => row.date,
	},

	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<AppliedViewModal />

				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon
						className="text-[1.5rem]"
						icon="material-symbols:cloud-download"
					/>
				</div>
			</div>
		),
		center: true,
	},
];

export default function AppliedCandidateList() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">
						List of Applied Candidates
					</h3>
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
			<div className="xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] bg-white">
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
