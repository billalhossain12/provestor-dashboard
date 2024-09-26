import { Icon } from '@iconify/react/dist/iconify.js';
import DataTable, {
	TableColumn,
	TableStyles,
} from 'react-data-table-component';

type TPropertyDetails = {
	ownerName: string;
	purchasePrice: number;
	totalPrice: number;
};

type TInvested = {
	sharesAmount: number;
	investedAmount: number;
};

type TDataRow = {
	orderId: string;
	image: string;
	propertyDetails: TPropertyDetails;
	investedDate: string;
	invested: TInvested;
  status:string;
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
    orderId: 'ord001',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'John Doe',
      purchasePrice: 350000,
      totalPrice: 400000,
    },
    investedDate: '2023-08-12',
    invested: {
      sharesAmount: 25,
      investedAmount: 50000,
    },
    status: 'active',
  },
  {
    orderId: 'ord002',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Jane Smith',
      purchasePrice: 500000,
      totalPrice: 550000,
    },
    investedDate: '2023-09-15',
    invested: {
      sharesAmount: 50,
      investedAmount: 100000,
    },
    status: 'pending',
  },
  {
    orderId: 'ord003',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Michael Johnson',
      purchasePrice: 250000,
      totalPrice: 300000,
    },
    investedDate: '2023-07-20',
    invested: {
      sharesAmount: 20,
      investedAmount: 40000,
    },
    status: 'completed',
  },
  {
    orderId: 'ord004',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Emily Davis',
      purchasePrice: 700000,
      totalPrice: 750000,
    },
    investedDate: '2023-06-25',
    invested: {
      sharesAmount: 70,
      investedAmount: 140000,
    },
    status: 'active',
  },
  {
    orderId: 'ord005',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Chris Lee',
      purchasePrice: 150000,
      totalPrice: 200000,
    },
    investedDate: '2023-05-10',
    invested: {
      sharesAmount: 10,
      investedAmount: 20000,
    },
    status: 'pending',
  },
  {
    orderId: 'ord006',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Sarah Wilson',
      purchasePrice: 450000,
      totalPrice: 500000,
    },
    investedDate: '2023-04-05',
    invested: {
      sharesAmount: 45,
      investedAmount: 90000,
    },
    status: 'active',
  },
  {
    orderId: 'ord007',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'David Martinez',
      purchasePrice: 300000,
      totalPrice: 350000,
    },
    investedDate: '2023-03-18',
    invested: {
      sharesAmount: 30,
      investedAmount: 60000,
    },
    status: 'completed',
  },
  {
    orderId: 'ord008',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Linda Clark',
      purchasePrice: 600000,
      totalPrice: 650000,
    },
    investedDate: '2023-02-25',
    invested: {
      sharesAmount: 60,
      investedAmount: 120000,
    },
    status: 'pending',
  },
  {
    orderId: 'ord009',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'James Lewis',
      purchasePrice: 400000,
      totalPrice: 450000,
    },
    investedDate: '2023-01-30',
    invested: {
      sharesAmount: 40,
      investedAmount: 80000,
    },
    status: 'active',
  },
  {
    orderId: 'ord010',
    image: 'https://i.ibb.co.com/L1njZks/property-image.jpg',
    propertyDetails: {
      ownerName: 'Olivia Brown',
      purchasePrice: 350000,
      totalPrice: 400000,
    },
    investedDate: '2023-08-22',
    invested: {
      sharesAmount: 35,
      investedAmount: 70000,
    },
    status: 'completed',
  },
];

const columns: TableColumn<TDataRow>[] = [
	{
		name: 'SL',
		selector: (row, index) => (index as number) + 1,
		maxWidth: '0.3rem',
	},
	{
		name: 'Order ID',
		id: 'orderId',
		selector: row => row.orderId,
		grow: 1,
	},
	{
		name: 'Image',
		id: 'image',
		cell: row => <img src={row.image} alt="Property Image" />,
		grow: 1,
	},
	{
		name: 'Property Details',
		id: 'investorDetails',
		cell: row => (
			<div className="space-y-[0.3rem]">
				<p><span className='font-semibold'>Owner Name:</span>{row.propertyDetails.ownerName}</p>
				<p><span className='font-semibold'>Purchase Price:</span>{row.propertyDetails.purchasePrice}</p>
				<p><span className='font-semibold'>Total Price:</span>{row.propertyDetails.totalPrice}</p>
			</div>
		),
		grow: 3,
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
					<span className="ml-1">{row.invested.sharesAmount}</span>
				</div>
				<div>
					<span>Invested:-</span>
					<span className="ml-1">${row.invested.investedAmount}</span>
				</div>
			</div>
		),
		grow: 2,
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
			<div className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer">
				<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
			</div>
		),
		center: true,
		grow: 1,
	},
];

export default function InvestmentListTab() {
	return (
		<section className="mb-[2.5rem]">
			<header className="overflow-x-auto xl:w-[1000px] lg:w-[750px] md:w-[500px] max-w-[90vw] pb-5 bg-white p-5">
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
