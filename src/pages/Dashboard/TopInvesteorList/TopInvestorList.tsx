import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, { TableColumn, TableStyles } from 'react-data-table-component';

type TDataRow = {
	propertyId: number;
	investorName: string;
	investorEmail: string;
	investedShares: string;
	investedAmount: number;
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
			minWidth:'600px'
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
		propertyId: 54363465465,
		investorName: 'Siam Ahmed',
		investorEmail: 'siam.ahmed@gmail.com',

		investedShares: '1500',
		investedAmount: 5500,
	}
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => (index as number) + 1,
		center: true,
		maxWidth: '0.3rem',
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
		grow:2
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
	},
];


export default function TopInvestorList() {
	return (
		<section className="mb-[1rem] shadow-custom bg-white">
			<header className="pb-5 p-5">
				<div className="flex justify-between items-center">
					<h3 className="text-[1.25rem] font-medium">Top Investors</h3>
					<div className="flex items-center gap-[2.5rem] flex-wrap">
						<div className="flex items-center gap-1">
							<Icon className="text-[1.3rem]" icon="mdi:filter-outline" />
							<p>Filter</p>
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
