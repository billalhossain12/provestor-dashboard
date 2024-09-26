import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TBeneficiaryDetails = {
	fullName: string;
	DOB: string;
};

type TDataRow = {
	beneficiaryDetails: TBeneficiaryDetails;
	properytName: string;
	addedDate: string;
	relationWithInvestor: string;
	document: string;
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
		beneficiaryDetails: {
			fullName: 'Siam Ahmed',
			DOB: '30-03-1997',
		},
		properytName: 'Sunset Villas',
		addedDate: '2023-01-12',
		relationWithInvestor: 'Brother',
		document: 'https://example.com/docs/property1.pdf',
	},
	{
		beneficiaryDetails: {
			fullName: 'Siam Ahmed',
			DOB: '30-03-1997',
		},
		properytName: 'Oceanview Apartments',
		addedDate: '2023-02-18',
		relationWithInvestor: 'Cousin',
		document: 'https://example.com/docs/property2.pdf',
	},
	{
		beneficiaryDetails: {
			fullName: 'Siam Ahmed',
			DOB: '30-03-1997',
		},
		properytName: 'Mountain Peak Lodge',
		addedDate: '2023-03-25',
		relationWithInvestor: 'Friend',
		document: 'https://example.com/docs/property3.pdf',
	},
	{
		beneficiaryDetails: {
			fullName: 'Siam Ahmed',
			DOB: '30-03-1997',
		},
		properytName: 'Green Valley Estate',
		addedDate: '2023-04-10',
		relationWithInvestor: 'Nephew',
		document: 'https://example.com/docs/property4.pdf',
	},
	{
		beneficiaryDetails: {
			fullName: 'Siam Ahmed',
			DOB: '30-03-1997',
		},
		properytName: 'Lakeview Homes',
		addedDate: '2023-05-15',
		relationWithInvestor: 'Son',
		document: 'https://example.com/docs/property5.pdf',
	},
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => (index as number) + 1,
		maxWidth: '0.3rem',
	},
	{
		name: 'Beneficiary Details',
		id: 'beneficiaryDetails',
		cell: row => (
			<div>
				<div>
					<span className="font-semibold mr-1">Full Name:</span>
					<span>{row.beneficiaryDetails.fullName}</span>
				</div>
				<div className="mt-2">
					<span className="font-semibold mr-1">DOB:</span>
					<span>{row.beneficiaryDetails.DOB}</span>
				</div>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Property Name',
		id: 'propertyName',
		selector: row => row.properytName,
		grow: 2,
	},
	{
		name: 'Date Added',
		id: 'addedDate',
		cell: row => <p>{row.addedDate}</p>,
		grow: 1,
	},
	{
		name: 'Relation with Investor',
		id: 'relationWithInvestor',
		selector: row => row.relationWithInvestor,
		grow: 2,
		sortable: true,
	},
	{
		name: 'Document',
		id: 'document',
		cell: row => <p className="w-[130px] px-1">{row.document}</p>,
		grow: 2,
		sortable: true,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<div className="flex space-x-2 border-[1px] border-primary text-primary bg-[#25BF171A] p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="material-symbols:check" />
				</div>
				<div className="flex space-x-2 border-[1px] border-red-800 text-red-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="gridicons:cross" />
				</div>
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="ic:sharp-cloud-download" />
				</div>
			</div>
		),
		center: true,
		grow: 1,
	},
];

export default function BeneficiaryListTab() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Beneficiaries</h3>
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
