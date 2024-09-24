import { Icon } from '@iconify/react/dist/iconify.js';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, PieLabelRenderProps } from 'recharts';

const renderLegend = ({ payload }) => {
	return (
		<ul className="flex justify-between items-center mt-[-50px]">
			{payload?.map((entry, index:number) => (
				<li key={`item-${index}`}>
					<div className="flex items-center gap-1">
						{/* <span>{}</span> */}
						<Icon
							icon="material-symbols-light:circle"
							className="text-[#25BF17] w-2 h-2"
						/>
						<p className="font-medium text-[12px]">{entry.value}</p>
					</div>
					<h4 className="text-[18px] font-bold ml-3 inline">
						{(entry.payload?.percent * 100).toFixed(0)}%
					</h4>
					<span>({entry?.payload?.value})</span>
				</li>
			))}
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
}:CustomLabelProps) => {
	const { name } = payload;
	const radius = innerRadius as number + ((outerRadius as number) - (innerRadius as number)) * 0.5;
	const x = cx as number + (radius as number) * Math.cos(-midAngle * RADIAN);
	const y = cy as number + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={(x as number) > (cx as number) ? 'start' : 'end'}
			dominantBaseline="left"
			className="text-[10px]"
		>
			<>
				<tspan>{name}</tspan>
				<tspan x={x} dy="1.5em" className="text-[12px]">
					{`${(percent as number * 100).toFixed(0)}%`}
				</tspan>
			</>
		</text>
	);
};

const COLORS = ['#25BF17', '#6CDE62'];

export default function InvestorReportPieChart() {
	const chartData = [
		{ name: 'Completed', value: 30 },
		{ name: 'Pending', value: 70 },
	];
	return (
    <div className='p-4 rounded-lg border-gray-300 border-[1px] w-[350px] h-[500px]'>
      <h3 className="text-[24px] font-medium">Investors</h3>
		<ResponsiveContainer className="mt-[-60px]" width="100%" height="100%">
			<PieChart width={200} height={200}>
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
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
