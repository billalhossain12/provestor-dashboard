import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, { TableColumn, TableStyles } from 'react-data-table-component';

type TDataRow = {
	transactionId: number;
	propertyId: number;
	investorName: string;
	investorEmail: string;
	investedDate: string;
	investedShares: string;
	investedAmount: number;
	paymentStatus: string;
};

const customStyles:TableStyles = {
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
		transactionId: 435435432534,
		propertyId: 54363465465,
		investorName: 'Siam Ahmed',
		investorEmail: 'siam.ahmed@gmail.com',
		investedDate: '18/09/2024',
		investedShares: '1500',
		investedAmount: 5500,
		paymentStatus: 'Pending',
	},
	{
		transactionId: 435435432534,
		propertyId: 54363465465,
		investorName: 'Siam Ahmed',
		investorEmail: 'siam.ahmed@gmail.com',
		investedDate: '18/09/2024',
		investedShares: '1500',
		investedAmount: 1200,
		paymentStatus: 'Success',
	},
	{
		transactionId: 435435432534,
		propertyId: 54363465465,
		investorName: 'Siam Ahmed',
		investorEmail: 'siam.ahmed@gmail.com',
		investedDate: '18/09/2024',
		investedShares: '1500',
		investedAmount: 36000,
		paymentStatus: 'Accepted',
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
		name: 'Transaction ID',
		id: 'transactionId',
		selector: row => row.transactionId,
		center: true,
		grow: 2,
	},
	{
		name: 'Investor Details',
		id: 'investorDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>{row.propertyId}</p>
				<p>{row.investorName}</p>
				<p>{row.investorEmail}</p>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Invested Date',
		id: 'investedDate',
		selector: row => row.investedDate,
		grow: 1,
	},
	{
		name: 'Invested',
		id: 'invested',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<div>
					<span>Shares:-</span>
					<span className="ml-1">{row.investedShares}</span>
				</div>
				<div>
					<span>Invested:-</span>
					<span className="ml-1">${row.investedAmount}</span>
				</div>
			</div>
		),
		grow: 2,
		sortable: true,
	},
	{
		name: 'Payment Status',
		id: 'paymentStatus',
		selector: row => row.paymentStatus,
		grow: 1,
		sortable: true,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
				<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
			</div>
		),
		center: true,
		grow: 1,
	},
];


export default function InvestmentList() {
	return (
		<section className="mb-[2.5rem] shadow-custom">
			<header className="overflow-auto pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Investments</h3>
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
						<button className="bg-primary px-3 py-1 text-white">
							View Full Details
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
