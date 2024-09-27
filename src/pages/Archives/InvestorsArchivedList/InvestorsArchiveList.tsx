import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TInvestorDetails = {
	name: string;
	email: string;
	phone: string;
};

type TDataRow = {
	investorId: number;
	investorDetails: TInvestorDetails;
	deletedDateTime: string;
	reason: string;
	investedShare: number;
	investedAmount: number;
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
		investorId: 1,
		investorDetails: {
			name: 'Investor 1',
			email: 'investor1@example.com',
			phone: '555-0001',
		},
		deletedDateTime: '2024-09-11 10:00:00',
		reason: 'Reason 1',
		investedShare: 10,
		investedAmount: 10000,
	},
	{
		investorId: 2,
		investorDetails: {
			name: 'Investor 2',
			email: 'investor2@example.com',
			phone: '555-0002',
		},
		deletedDateTime: '2024-09-12 10:00:00',
		reason: 'Reason 2',
		investedShare: 20,
		investedAmount: 20000,
	},
	{
		investorId: 3,
		investorDetails: {
			name: 'Investor 3',
			email: 'investor3@example.com',
			phone: '555-0003',
		},
		deletedDateTime: '2024-09-13 10:00:00',
		reason: 'Reason 3',
		investedShare: 30,
		investedAmount: 30000,
	},
	{
		investorId: 4,
		investorDetails: {
			name: 'Investor 4',
			email: 'investor4@example.com',
			phone: '555-0004',
		},
		deletedDateTime: '2024-09-14 10:00:00',
		reason: 'Reason 4',
		investedShare: 40,
		investedAmount: 40000,
	},
	{
		investorId: 5,
		investorDetails: {
			name: 'Investor 5',
			email: 'investor5@example.com',
			phone: '555-0005',
		},
		deletedDateTime: '2024-09-15 10:00:00',
		reason: 'Reason 5',
		investedShare: 50,
		investedAmount: 50000,
	},
	{
		investorId: 6,
		investorDetails: {
			name: 'Investor 6',
			email: 'investor6@example.com',
			phone: '555-0006',
		},
		deletedDateTime: '2024-09-16 10:00:00',
		reason: 'Reason 6',
		investedShare: 60,
		investedAmount: 60000,
	},
	{
		investorId: 7,
		investorDetails: {
			name: 'Investor 7',
			email: 'investor7@example.com',
			phone: '555-0007',
		},
		deletedDateTime: '2024-09-17 10:00:00',
		reason: 'Reason 7',
		investedShare: 70,
		investedAmount: 70000,
	},
	{
		investorId: 8,
		investorDetails: {
			name: 'Investor 8',
			email: 'investor8@example.com',
			phone: '555-0008',
		},
		deletedDateTime: '2024-09-18 10:00:00',
		reason: 'Reason 8',
		investedShare: 80,
		investedAmount: 80000,
	},
	{
		investorId: 9,
		investorDetails: {
			name: 'Investor 9',
			email: 'investor9@example.com',
			phone: '555-0009',
		},
		deletedDateTime: '2024-09-19 10:00:00',
		reason: 'Reason 9',
		investedShare: 90,
		investedAmount: 90000,
	},
	{
		investorId: 10,
		investorDetails: {
			name: 'Investor 10',
			email: 'investor10@example.com',
			phone: '555-0010',
		},
		deletedDateTime: '2024-09-20 10:00:00',
		reason: 'Reason 10',
		investedShare: 100,
		investedAmount: 100000,
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
		id: 'invested',
		cell: row => (
			<div>
				<p>
					<span className="font-semibold">Share:-</span>
					{row.investedShare}
				</p>
				<p>
					<span className="font-semibold">Invested:-</span>
					{row.investedAmount}
				</p>
			</div>
		),
		grow: 2,
	},

	{
		name: 'Deleted Date and Time',
		id: 'paymentStatus',
		selector: row => row.deletedDateTime,
		grow: 2,
		sortable: true,
	},
	{
		name: 'Reason for Delete',
		id: 'paymentStatus',
		selector: row => row.reason,
		grow: 2,
		sortable: true,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
				<Icon className="text-[1.5rem]" icon="material-symbols:restore-page" />
			</div>
		),
		center: true,
		grow: 1,
	},
];

export default function InvestorsArchivedList() {
	return (
		<section className="mb-[2.5rem] bg-white shadow-custom">
			<header className="overflow-x-auto pb-5 p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">Investors Archive data</h3>
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
						<button className="bg-primary px-3 py-1 text-white flex items-center gap-2">
							<span>Export</span>
							<Icon icon="material-symbols:cloud-download" />
						</button>
					</div>
				</div>
			</header>
			<DataTable
				columns={columns.map(column => ({
					...column,
					name: (
						<div className="flex items-center justify-between">
							<span>{column.name}</span>
							{column.name == 'Invested' && <Icon icon="solar:sort-outline" />}
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
		</section>
	);
}
