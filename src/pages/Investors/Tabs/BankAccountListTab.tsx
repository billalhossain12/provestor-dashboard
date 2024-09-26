import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TBankDetails = {
	accountNumber: number;
	ifscCode: string;
	accountHolderName: string;
};

type TDataRow = {
	bankDetails: TBankDetails;
	accountType: string;
	bankName: string;
	bankAccountNickName: string;
	addedDate: string;
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
		bankDetails: {
			accountNumber: 1234567890,
			ifscCode: 'ABC12345',
			accountHolderName: 'John Doe',
		},
		accountType: 'Savings',
		bankName: 'Bank of America',
		bankAccountNickName: 'John’s Main Account',
		addedDate: '2023-01-12',
	},
	{
		bankDetails: {
			accountNumber: 2345678901,
			ifscCode: 'XYZ98765',
			accountHolderName: 'Jane Smith',
		},
		accountType: 'Checking',
		bankName: 'Chase Bank',
		bankAccountNickName: 'Jane’s Checking',
		addedDate: '2023-02-18',
	},
	{
		bankDetails: {
			accountNumber: 3456789012,
			ifscCode: 'LMN56789',
			accountHolderName: 'Michael Johnson',
		},
		accountType: 'Savings',
		bankName: 'Wells Fargo',
		bankAccountNickName: 'Michael’s Savings',
		addedDate: '2023-03-25',
	},
	{
		bankDetails: {
			accountNumber: 4567890123,
			ifscCode: 'PQR12345',
			accountHolderName: 'Emily Davis',
		},
		accountType: 'Business',
		bankName: 'Citi Bank',
		bankAccountNickName: 'Emily’s Business',
		addedDate: '2023-04-10',
	},
	{
		bankDetails: {
			accountNumber: 5678901234,
			ifscCode: 'UVW67890',
			accountHolderName: 'Chris Lee',
		},
		accountType: 'Savings',
		bankName: 'HSBC',
		bankAccountNickName: 'Chris’s Savings',
		addedDate: '2023-05-15',
	},
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => index as number + 1,
		maxWidth: '0.5rem',
	},
	{
		name: 'Bank Details',
		id: 'bankDetails',
		cell: row => (
			<div>
				<div>
					<span className="font-semibold">A/C Number:</span>
					<span>{row.bankDetails.accountNumber}</span>
				</div>
				<div className="mt-2">
					<span className="font-semibold">IFSC:</span>
					<span>{row.bankDetails.ifscCode}</span>
				</div>
				<div className="mt-2">
					<span className="font-semibold">A/C Holder Name:</span>
					<span>{row.bankDetails.accountHolderName}</span>
				</div>
			</div>
		),
		grow: 3,
	},
	{
		name: 'A/C Type',
		id: 'acType',
		selector: row => row.accountType,
		grow: 1,
	},
	{
		name: 'Bank Name',
		id: 'bankName',
		cell: row => <p>{row.bankName}</p>,
		grow: 2,
	},
	{
		name: 'Bank Account Nick Name',
		id: 'bankAccountNickName',
		selector: row => row.bankAccountNickName,
		grow: 3,
		sortable: true,
	},
	{
		name: 'Date Added',
		id: 'addedDate',
		cell: row => <p className="w-[130px] px-1">{row.addedDate}</p>,
		grow: 2,
		sortable: true,
	}
];

export default function BankAccountListTab() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Bank Accounts</h3>
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
