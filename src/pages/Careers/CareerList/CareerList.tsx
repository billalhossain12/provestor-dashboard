import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';

type TDataRow = {
	careerId: number;
	title: string;
	description: string;
	location: string;
	type: string;
	date: string;
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
		careerId: 546365365465,
		title: 'Software Engineer',
		description: 'Responsible for developing and maintaining web applications.',
		location: 'New York, USA',
		type: 'Full-Time',
		date: '2024-09-01',
		status: 'Open',
	},
	{
		careerId: 546365365466,
		title: 'Data Analyst',
		description:
			'Analyze data sets to provide insights for business decisions.',
		location: 'San Francisco, USA',
		type: 'Contract',
		date: '2024-08-25',
		status: 'Open',
	},
	{
		careerId: 546365365467,
		title: 'Project Manager',
		description: 'Manage software development projects and teams.',
		location: 'London, UK',
		type: 'Full-Time',
		date: '2024-09-05',
		status: 'Closed',
	},
	{
		careerId: 546365365468,
		title: 'UX Designer',
		description:
			'Design user-friendly interfaces for web and mobile applications.',
		location: 'Berlin, Germany',
		type: 'Part-Time',
		date: '2024-09-10',
		status: 'Open',
	},
	{
		careerId: 546365365469,
		title: 'Product Owner',
		description: 'Lead product development teams and prioritize features.',
		location: 'Toronto, Canada',
		type: 'Full-Time',
		date: '2024-08-30',
		status: 'Closed',
	},
	{
		careerId: 546365365470,
		title: 'DevOps Engineer',
		description: 'Automate infrastructure and manage deployment pipelines.',
		location: 'Sydney, Australia',
		type: 'Full-Time',
		date: '2024-09-12',
		status: 'Open',
	},
	{
		careerId: 546365365471,
		title: 'Quality Assurance Engineer',
		description:
			'Test software to ensure it meets requirements and quality standards.',
		location: 'Tokyo, Japan',
		type: 'Full-Time',
		date: '2024-09-15',
		status: 'Open',
	},
	{
		careerId: 546365365472,
		title: 'Frontend Developer',
		description:
			'Develop the frontend of web applications using modern frameworks.',
		location: 'Paris, France',
		type: 'Full-Time',
		date: '2024-09-08',
		status: 'Closed',
	},
	{
		careerId: 546365365473,
		title: 'Backend Developer',
		description: 'Work on server-side logic and integration of APIs.',
		location: 'Singapore',
		type: 'Contract',
		date: '2024-09-18',
		status: 'Open',
	},
	{
		careerId: 546365365474,
		title: 'Cybersecurity Specialist',
		description:
			'Ensure the security of systems and protect against cyber threats.',
		location: 'Austin, USA',
		type: 'Full-Time',
		date: '2024-09-20',
		status: 'Open',
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
		name: 'Career ID',
		id: 'careerId',
		cell: row => row.careerId,
		grow: 1,
	},
	{
		name: 'Title',
		id: 'title',
		cell: row => row.title,
		grow: 1,
	},
	{
		name: 'Job Description',
		id: 'description',
		selector: row => row.description,
		grow: 1,
	},
	{
		name: 'Location',
		id: 'location',
		selector: row => row.location,
		grow: 1,
		sortable: true,
	},
	{
		name: 'Type',
		id: 'type',
		selector: row => row.type,
		grow: 1,
		sortable: true,
	},
	{
		name: 'Date',
		id: 'date',
		selector: row => row.date,
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

export default function CareerList() {
	return (
		<section className="mb-[2.5rem] shadow-custom">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of Careers</h3>
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
