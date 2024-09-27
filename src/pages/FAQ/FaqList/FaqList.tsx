import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';
import { Link } from 'react-router-dom';

type TTitle = {
	question: string;
	answer: string;
};

type TDataRow = {
	title: TTitle;
	category: string;
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
			minWidth: '800px',
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
		title: {
			question:
				'What is the minimum investment amount for commercial real estate?',
			answer: 'The minimum investment amount typically starts at $50,000.',
		},
		category: 'Commercial Real Estate',
		status: 'active',
	},
	{
		title: {
			question: 'How do I withdraw funds from residential investments?',
			answer:
				'You can withdraw funds by submitting a request through your account dashboard.',
		},
		category: 'Residential Housing',
		status: 'inactive',
	},
	{
		title: {
			question: 'What types of commercial properties can I invest in?',
			answer:
				'You can invest in office buildings, retail spaces, and industrial properties.',
		},
		category: 'Commercial Real Estate',
		status: 'active',
	},
	{
		title: {
			question: 'How are returns calculated for residential housing?',
			answer:
				'Returns are calculated based on rental income and property appreciation.',
		},
		category: 'Residential Housing',
		status: 'active',
	},
	{
		title: {
			question: 'Can I invest in international commercial properties?',
			answer:
				'Yes, international investments are available through our global partnerships.',
		},
		category: 'Commercial Real Estate',
		status: 'inactive',
	},
	{
		title: {
			question:
				'What is the risk associated with residential property investments?',
			answer:
				'Risks include market fluctuations, tenant issues, and maintenance costs.',
		},
		category: 'Residential Housing',
		status: 'active',
	},
	{
		title: {
			question:
				'What are the tax implications for commercial real estate investments?',
			answer:
				'Tax implications vary by location but generally include property taxes and capital gains tax.',
		},
		category: 'Commercial Real Estate',
		status: 'inactive',
	},
	{
		title: {
			question: 'How do I manage my residential housing investment account?',
			answer:
				'You can manage your account through our online portal, where you can update details and track investments.',
		},
		category: 'Residential Housing',
		status: 'inactive',
	},
	{
		title: {
			question:
				'What is the difference between investing in commercial and residential properties?',
			answer:
				'Commercial properties usually offer higher returns but come with more risk, while residential investments are generally more stable.',
		},
		category: 'Commercial Real Estate',
		status: 'active',
	},
	{
		title: {
			question:
				'How can I track the performance of my residential housing investments?',
			answer:
				'You can track performance through the investment dashboard and performance reports available in your account.',
		},
		category: 'Residential Housing',
		status: 'active',
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
		name: 'Title',
		id: 'title',
		cell: row => (
			<div className="space-y-2">
				<p>
					<span className="font-semibold mb">Q</span>-{row.title.question}
				</p>
				<p>
					<span className="font-semibold">A</span>-{row.title.answer}
				</p>
			</div>
		),
	},

	{
		name: 'Category',
		id: 'category',
		selector: row => row.category,
	},
	{
		name: 'Status',
		id: 'status',
		selector: row => row.status,
	},

	{
		name: 'Action',
		id: 'action',
		cell: () => (
			<div className="flex items-center gap-3">
				<div className="flex space-x-2 border-[1px] border-gray-300 p-2 rounded-lg cursor-pointer">
					<Icon className="text-[1.5rem]" icon="material-symbols:delete" />
				</div>
				<Link
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					to="54653653"
				>
					<div className="flex space-x-2 border-[1px] border-gray-300 p-2 rounded-lg cursor-pointer">
						<Icon className="text-[1.5rem]" icon="material-symbols:edit" />
					</div>
				</Link>
			</div>
		),
		center: true,
	},
];

export default function FaqList() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto p-5 mb-3">
				<div className="flex justify-between items-center min-w-[1100px]">
					<h3 className="text-[1.25rem] font-medium">List of FAQ</h3>
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
		</section>
	);
}
