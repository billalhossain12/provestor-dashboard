import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { ContactModal } from '../ContactModal/ContactModal';

type TDataRow = {
	enquireId: number;
	contactDetails: {
		name: string;
		email: string;
		phone: string;
	};
	date: string;
	message: string;
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
		enquireId: 5645654654,
		contactDetails: {
			name: 'Billal Hossain',
			email: 'billal.hossain@gmail.com',
			phone: '013435453',
		},
		date: '09/19/2024',
		message:
			"Got a question or need assistance? Feel free to reach out, and I'll get back to you as soon as possible!",
	},
	{
		enquireId: 5645654654,
		contactDetails: {
			name: 'Billal Hossain',
			email: 'billal.hossain@gmail.com',
			phone: '013435453',
		},
		date: '09/19/2024',
		message:
			"Got a question or need assistance? Feel free to reach out, and I'll get back to you as soon as possible!",
	},
	{
		enquireId: 5645654654,
		contactDetails: {
			name: 'Billal Hossain',
			email: 'billal.hossain@gmail.com',
			phone: '013435453',
		},
		date: '09/19/2024',
		message:
			"Got a question or need assistance? Feel free to reach out, and I'll get back to you as soon as possible!",
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
		name: 'Enquiry ID',
		id: 'enquireyId',
		selector: row => row.enquireId,
		center: true,
		grow: 1,
	},
	{
		name: 'Details',
		id: 'details',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p>{row.contactDetails.name}</p>
				<p>{row.contactDetails.email}</p>
				<p>{row.contactDetails.phone}</p>
			</div>
		),
		grow: 2,
	},
	{
		name: 'Date',
		id: 'date',
		selector: row => row.date,
		grow: 1,
	},
	{
		name: 'Message',
		id: 'message',
		cell: row => <p>{row.message}</p>,
		grow: 4,
	},
	{
		name: 'Action',
		id: 'action',
		cell: () => <ContactModal />,
		center: true,
		grow: 1,
	},
];

export default function ContactList() {
	return (
		<section className="mb-[2.5rem] bg-white shadow-custom">
			<header className="overflow-x-auto pb-5 p-5 shadow-custom">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">Contact Enquires</h3>
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
