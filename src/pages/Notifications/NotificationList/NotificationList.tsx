import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';


type TDataRow = {
	title:string;
	description:string;
	date:string;
	image:string;

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
		title: "Luxury Apartment",
		description: "A modern apartment located in the city center.",
		date: "2024-09-01",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Cozy Cottage",
		description: "A peaceful retreat in the countryside.",
		date: "2024-09-05",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Urban Loft",
		description: "A stylish loft with a fantastic view of the skyline.",
		date: "2024-09-08",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Beachfront Villa",
		description: "A luxurious villa with direct beach access.",
		date: "2024-09-10",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Mountain Cabin",
		description: "A rustic cabin with beautiful mountain views.",
		date: "2024-09-12",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Suburban Home",
		description: "A family home in a quiet suburban neighborhood.",
		date: "2024-09-15",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Penthouse Suite",
		description: "A spacious penthouse with a panoramic city view.",
		date: "2024-09-18",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Historic Mansion",
		description: "An elegant mansion with a rich history.",
		date: "2024-09-20",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Eco-friendly House",
		description: "A modern eco-friendly house with solar panels.",
		date: "2024-09-22",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
	  },
	  {
		title: "Downtown Condo",
		description: "A trendy condo in the heart of downtown.",
		date: "2024-09-25",
		image: "https://i.ibb.co.com/L1njZks/property-image.jpg",
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
		name: 'Title',
		id: 'title',
		selector: row => row.title,
		center: true,
		grow: 1,
	},
	{
		name: 'description',
		id: 'description',
		selector: row => row.description,
		grow: 2,
	},
	{
		name: 'Date',
		id: 'date',
		selector: row => row.date,
		grow: 1,
	},
	{
		name: 'Image',
		id: 'image',
		cell: row => (<img src={row.image} alt="Image for property"/>),
		grow: 1,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<Link
					to="12345"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
						<Icon className="text-[1.5rem]" icon="material-symbols:edit" />
					</div>
				</Link>
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon
						className="text-[1.5rem]"
						icon="material-symbols:delete-rounded"
					/>
				</div>
				<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
					<Icon className="text-[1.5rem]" icon="material-symbols:send" />
				</div>
			</div>
		),
		center: true,
		grow: 1,
	},
];

export default function NotificationList() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">Manage Notification</h3>
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
