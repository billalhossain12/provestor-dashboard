import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';

type TPropertyDetails = {
	ownerName: string;
	purchasePrice: number;
	totalPropertyCost: number;
};

type TDataRow = {
	propertyId: number;
	image: string;
	propertyDetails: TPropertyDetails;
	type: string;
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
		propertyId: 1,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'John Doe',
			purchasePrice: 250000,
			totalPropertyCost: 270000,
		},
		type: 'Apartment',
		onboardingDate: '2024-01-10',
		status: 'Active',
	},
	{
		propertyId: 2,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Jane Smith',
			purchasePrice: 320000,
			totalPropertyCost: 340000,
		},
		type: 'Villa',
		onboardingDate: '2024-02-15',
		status: 'Active',
	},
	{
		propertyId: 3,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Michael Johnson',
			purchasePrice: 180000,
			totalPropertyCost: 195000,
		},
		type: 'Townhouse',
		onboardingDate: '2024-03-20',
		status: 'Pending',
	},
	{
		propertyId: 4,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Emily Brown',
			purchasePrice: 400000,
			totalPropertyCost: 430000,
		},
		type: 'Penthouse',
		onboardingDate: '2024-04-25',
		status: 'Inactive',
	},
	{
		propertyId: 5,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'David Wilson',
			purchasePrice: 150000,
			totalPropertyCost: 160000,
		},
		type: 'Cottage',
		onboardingDate: '2024-05-30',
		status: 'Active',
	},
	{
		propertyId: 6,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Sophia Martinez',
			purchasePrice: 280000,
			totalPropertyCost: 295000,
		},
		type: 'Condo',
		onboardingDate: '2024-06-05',
		status: 'Pending',
	},
	{
		propertyId: 7,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'James Taylor',
			purchasePrice: 500000,
			totalPropertyCost: 530000,
		},
		type: 'Mansion',
		onboardingDate: '2024-07-10',
		status: 'Active',
	},
	{
		propertyId: 8,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Olivia Anderson',
			purchasePrice: 350000,
			totalPropertyCost: 370000,
		},
		type: 'Apartment',
		onboardingDate: '2024-08-15',
		status: 'Inactive',
	},
	{
		propertyId: 9,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Alexander Lee',
			purchasePrice: 270000,
			totalPropertyCost: 290000,
		},
		type: 'Duplex',
		onboardingDate: '2024-09-01',
		status: 'Active',
	},
	{
		propertyId: 10,
		image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
		propertyDetails: {
			ownerName: 'Isabella King',
			purchasePrice: 220000,
			totalPropertyCost: 235000,
		},
		type: 'Townhouse',
		onboardingDate: '2024-09-20',
		status: 'Pending',
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
		name: 'Property ID',
		id: 'propertyId',
		selector: row => row.propertyId,
		center: true,
		grow: 1,
	},
	{
		name: 'Image',
		id: 'image',
		cell: row => <img src={row.image} alt="Property Image" />,
		center: true,
		grow: 1,
	},
	{
		name: 'Property Details',
		id: 'propertyDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>
					<span className="font-semibold">Owner Name:-</span>
					{row.propertyDetails.ownerName}
				</p>
				<p>
					<span className="font-semibold">Purchase Price:-</span>
					{row.propertyDetails.purchasePrice}
				</p>
				<p>
					<span className="font-semibold">Total Property Cost:-</span>
					{row.propertyDetails.totalPropertyCost}
				</p>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Type',
		id: 'type',
		selector: row => row.type,
		grow: 1,
	},
	{
		name: 'Onboarding Date',
		id: 'onbaordingDate',
		selector: row => row.onboardingDate,
		grow: 1,
		sortable: true,
	},
	{
		name: 'Status',
		id: 'status',
		selector: row => row.status,
		grow: 1,
		sortable: true,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<Link to="4353254325">
					<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
						<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
					</div>
				</Link>
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="material-symbols:edit" />
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

export default function PropertyList() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Properties</h3>
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
