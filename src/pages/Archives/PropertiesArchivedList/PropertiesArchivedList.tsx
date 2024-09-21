import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TPropertyDetails = {
	ownerName: string;
	purchasePrice: number;
	totalPropertyCost: number;
};

type TDataRow = {
	porpertyId: number;
	image: string;
	propertyDetails: TPropertyDetails;
	deletedDateTime: string;
	reason: string;
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
	  porpertyId: 1,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 1', purchasePrice: 100000, totalPropertyCost: 120000 },
	  deletedDateTime: '2024-09-11 11:00:00',
	  reason: 'Reason 1'
	},
	{
	  porpertyId: 2,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 2', purchasePrice: 200000, totalPropertyCost: 240000 },
	  deletedDateTime: '2024-09-12 11:00:00',
	  reason: 'Reason 2'
	},
	{
	  porpertyId: 3,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 3', purchasePrice: 300000, totalPropertyCost: 360000 },
	  deletedDateTime: '2024-09-13 11:00:00',
	  reason: 'Reason 3'
	},
	{
	  porpertyId: 4,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 4', purchasePrice: 400000, totalPropertyCost: 480000 },
	  deletedDateTime: '2024-09-14 11:00:00',
	  reason: 'Reason 4'
	},
	{
	  porpertyId: 5,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 5', purchasePrice: 500000, totalPropertyCost: 600000 },
	  deletedDateTime: '2024-09-15 11:00:00',
	  reason: 'Reason 5'
	},
	{
	  porpertyId: 6,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 6', purchasePrice: 600000, totalPropertyCost: 720000 },
	  deletedDateTime: '2024-09-16 11:00:00',
	  reason: 'Reason 6'
	},
	{
	  porpertyId: 7,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 7', purchasePrice: 700000, totalPropertyCost: 840000 },
	  deletedDateTime: '2024-09-17 11:00:00',
	  reason: 'Reason 7'
	},
	{
	  porpertyId: 8,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 8', purchasePrice: 800000, totalPropertyCost: 960000 },
	  deletedDateTime: '2024-09-18 11:00:00',
	  reason: 'Reason 8'
	},
	{
	  porpertyId: 9,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 9', purchasePrice: 900000, totalPropertyCost: 1080000 },
	  deletedDateTime: '2024-09-19 11:00:00',
	  reason: 'Reason 9'
	},
	{
	  porpertyId: 10,
	  image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
	  propertyDetails: { ownerName: 'Owner 10', purchasePrice: 1000000, totalPropertyCost: 1200000 },
	  deletedDateTime: '2024-09-20 11:00:00',
	  reason: 'Reason 10'
	}
  ]
  

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
		selector: row => row.porpertyId,
		grow: 1,
	},
	{
		name: 'Image',
		id: 'Image',
		cell: row => (
			<img src={row.image} alt="property image" />
		),
		grow: 1,
	},
	{
		name: 'Property Details',
		id: 'propertyDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p><span className='font-semibold'>Owner Name:-</span>{row.propertyDetails.ownerName}</p>
				<p><span className='font-semibold'>Purchase Price:-</span>{row.propertyDetails.purchasePrice}</p>
				<p><span className='font-semibold'>Total Property Cost:-</span>{row.propertyDetails.totalPropertyCost}</p>
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

export default function PropertiesArchivedList() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">
						Properties Archive data
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
