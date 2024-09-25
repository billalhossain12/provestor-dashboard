import { Icon } from '@iconify/react/dist/iconify.js';
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	PieLabelRenderProps,
} from 'recharts';

interface CustomLabelProps extends PieLabelRenderProps {
	payload: {
		name: string;
	};
}

type TRenderLegendProps = {
	type: string;
	value: string;
	color: string;
	payload: any;
};

const renderLegend = ({ payload }: TRenderLegendProps) => {
	return (
		<ul className="mt-[-50px]">
			{payload?.map((entry, index: number) => {
				return (
					<li
						className="flex justify-between mb-5 text-[14px]"
						key={`item-${index}`}
					>
						<div className="flex items-center gap-1">
							<Icon
								icon="material-symbols-light:circle"
								style={{ color: entry?.color, width: '12px', height: '12px' }}
							/>
							<p>{entry.value}</p>
						</div>
						<div>
							<span>{(entry.payload?.percent * 100).toFixed(0)}%</span>
							<span className="ml-1">({entry?.payload?.value})</span>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

const RADIAN = Math.PI / 180;
interface CustomLabelProps extends PieLabelRenderProps {
	payload: {
		name: string;
	};
}
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	payload,
}: CustomLabelProps) => {
	const { name } = payload;
	const radius =
		(innerRadius as number) +
		((outerRadius as number) - (innerRadius as number)) * 0.5;
	const x = (cx as number) + (radius as number) * Math.cos(-midAngle * RADIAN);
	const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor='middle'
			dominantBaseline="middle"
			className='text-[12px]'
		>
			<>
				<tspan>
					{name}
				</tspan>
				<tspan x={x} dy="1.5em" className="text-[14px]">
					{`${((percent as number) * 100).toFixed(0)}%`}
				</tspan>
			</>
		</text>
	);
};

const COLORS = ['#22C55E', '#EF4444'];

export default function InvestorReportPieChart() {
	const chartData = [
		{ name: 'Active', value: 70 },
		{ name: 'Inactive', value: 30 },
	];
	return (
		<div className="p-4  lg:w-[250px] w-full h-[500px]">
			<h3 className="text-[24px] font-medium">Investors</h3>
			<ResponsiveContainer className="mt-[-60px]" width="100%" height="100%">
				<PieChart>
					<Pie
						data={chartData}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						fill="#8884d8"
						dataKey="value"
					>
						{chartData.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Legend
						verticalAlign="bottom"
						height={36}
						iconType="circle"
						content={renderLegend}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
