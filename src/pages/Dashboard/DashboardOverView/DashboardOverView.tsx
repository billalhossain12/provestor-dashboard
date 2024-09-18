import { Icon } from '@iconify/react/dist/iconify.js';
import { Progress } from '@material-tailwind/react';
import type { ProgressProps } from "@material-tailwind/react";

// Pick only the relevant props: color, value, and size
type PickedProgressProps = Pick<ProgressProps, 'color' | 'value' | 'size' | 'label'>;

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

const ProgressBar = ({ value=50, color = 'green', size = 'sm' }:PickedProgressProps) => {
	return <Progress color={color} value={value} size={size} />;
  };

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default function DashboardOverView() {
	return (
		<>
			<section className="mb-[2.5rem]">
				<h3 className="text-[1.25rem] font-medium mb-[2rem]">Dashobard</h3>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-[2rem]">
					{/* item- 1  */}
					<div className="shadow-custom p-[1.25rem]">
						<h3 className="text-[#858585] font-semibold mb-3">
							Total Investors
						</h3>
						<div className="flex justify-between items-center">
							<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
								500
							</h1>
							<div className="bg-primary inline-block p-1">
								<Icon
									className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
									icon="heroicons:user-group-solid"
								/>
							</div>
						</div>
					</div>
					{/* item- 2  */}
					<div className="shadow-custom p-[1.25rem]">
						<h3 className="text-[#858585] font-semibold mb-3">
							Total Properties
						</h3>
						<div className="flex justify-between items-center">
							<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
								100
							</h1>
							<div className="bg-primary inline-block p-1">
								<Icon
									className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
									icon="mdi:land-plots-marker"
								/>
							</div>
						</div>
					</div>
					{/* item- 3  */}
					<div className="shadow-custom p-[1.25rem]">
						<h3 className="text-[#858585] font-semibold mb-3">
							Total Investments
						</h3>
						<div className="flex justify-between items-center">
							<h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
								$559.25k
							</h1>
							<div className="bg-primary inline-block p-1">
								<Icon
									className="text-[1.5rem] text-white border-[1px] border-white md:w-[3rem] w-[2rem] md:h-[3rem] h-[2rem]"
									icon="mdi:dollar"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='mb-[2.5rem]'>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-[1.5rem]">
					{/* Property List with Progress  */}
					<div className='shadow-custom'>
					<h3 className="text-[1.25rem] font-semibold p-[1.5rem]">Properties</h3>
					<div className='overflow-x-auto'>
					<table className='min-w-[500px] text-left'>
						<thead>
							<tr className="text-[12px] font-bold border-y-[1px] border-y-[#EAECF0]">
								<th className="px-[1.25rem] py-[12px]">SL</th>
								<th className="px-[1.25rem] py-[12px]">Property Details</th>
								<th className="px-[1.25rem] py-[12px]">Progress</th>
								<th className="px-[1.25rem] py-[12px]">Action</th>
							</tr>
						</thead>

						<tbody>
							<tr className="text-[1rem] border-[1px] text-[#B1B1B1] border-transparent hover:border-primary hover:text-primary">
								<td className='p-[1.25rem]'>1</td>
								<td className='p-[1.25rem]'>
									<p>123456</p>
									<p>Property Name</p>
								</td>
								<td className='p-[1.25rem] w-[200px]'>
									<p className='border-[1px] border-primary text-primary rounded-lg p-1 text-center mb-3 w-[4rem]'>50%</p>
									<ProgressBar/>
								</td>
								<td className='p-[1.25rem] flex justify-center items-center'>
								<Icon className='text-[2rem] cursor-pointer' icon="weui:arrow-outlined" />
								</td>
							</tr>
							<tr className="text-[1rem] border-[1px] text-[#B1B1B1] border-transparent hover:border-primary hover:text-primary">
								<td className='p-[1.25rem]'>1</td>
								<td className='p-[1.25rem]'>
									<p>123456</p>
									<p>Property Name</p>
								</td>
								<td className='p-[1.25rem] w-[200px]'>
									<p className='border-[1px] border-primary text-primary rounded-lg p-1 text-center mb-3 w-[4rem]'>50%</p>
									<ProgressBar/>
								</td>
								<td className='p-[1.25rem] flex justify-center items-center'>
								<Icon className='text-[2rem] cursor-pointer' icon="weui:arrow-outlined" />
								</td>
							</tr>
							<tr className="text-[1rem] border-[1px] text-[#B1B1B1] border-transparent hover:border-primary hover:text-primary">
								<td className='p-[1.25rem]'>1</td>
								<td className='p-[1.25rem]'>
									<p>123456</p>
									<p>Property Name</p>
								</td>
								<td className='p-[1.25rem] w-[200px]'>
									<p className='border-[1px] border-primary text-primary rounded-lg p-1 text-center mb-3 w-[4rem]'>50%</p>
									<ProgressBar/>
								</td>
								<td className='p-[1.25rem] flex justify-center items-center'>
								<Icon className='text-[2rem] cursor-pointer' icon="weui:arrow-outlined" />
								</td>
							</tr>
							<tr className="text-[1rem] border-[1px] text-[#B1B1B1] border-transparent hover:border-primary hover:text-primary">
								<td className='p-[1.25rem]'>1</td>
								<td className='p-[1.25rem]'>
									<p>123456</p>
									<p>Property Name</p>
								</td>
								<td className='p-[1.25rem] w-[200px]'>
									<p className='border-[1px] border-primary text-primary rounded-lg p-1 text-center mb-3 w-[4rem]'>50%</p>
									<ProgressBar/>
								</td>
								<td className='p-[1.25rem] flex justify-center items-center'>
								<Icon className='text-[2rem] cursor-pointer' icon="weui:arrow-outlined" />
								</td>
							</tr>
							<tr className="text-[1rem] border-[1px] text-[#B1B1B1] border-transparent hover:border-primary hover:text-primary">
								<td className='p-[1.25rem]'>1</td>
								<td className='p-[1.25rem]'>
									<p>123456</p>
									<p>Property Name</p>
								</td>
								<td className='p-[1.25rem] w-[200px]'>
									<p className='border-[1px] border-primary text-primary rounded-lg p-1 text-center mb-3 w-[4rem]'>50%</p>
									<ProgressBar/>
								</td>
								<td className='p-[1.25rem] flex justify-center items-center'>
								<Icon className='text-[2rem] cursor-pointer' icon="weui:arrow-outlined" />
								</td>
							</tr>
						</tbody>
					</table>
					</div>
					</div>

					{/* Area Chart  */}
					<div className='shadow-custom p-[1.5rem]'>
						<h3 className="text-[1.25rem] font-semibold pb-[1.2rem]">Total Shares</h3>
						<div className='overflow-x-auto'>
							<AreaChart
								width={500}
								height={400}
								data={data}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area
									type="monotone"
									dataKey="uv"
									stroke="#8884d8"
									fill="#24B24B2B"
								/>
							</AreaChart>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
