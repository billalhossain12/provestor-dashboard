import { Icon } from '@iconify/react/dist/iconify.js';
import {
	Bar,
	BarChart,
	Rectangle,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
  TooltipProps
} from 'recharts';

const data = [
	{ month: 'Jan', usersJoined: 50 },
	{ month: 'Feb', usersJoined: 65 },
	{ month: 'Mar', usersJoined: 80 },
	{ month: 'Apr', usersJoined: 45 },
	{ month: 'May', usersJoined: 90 },
	{ month: 'Jun', usersJoined: 75 },
	{ month: 'Jul', usersJoined: 60 },
	{ month: 'Aug', usersJoined: 85 },
	{ month: 'Sep', usersJoined: 70 },
	{ month: 'Oct', usersJoined: 55 },
	{ month: 'Nov', usersJoined: 100 },
	{ month: 'Dec', usersJoined: 120 },
];

const renderTooltip = ({ active, label, payload }:TooltipProps<string, number>) => {
	if (active && payload?.length) {
		return (
			<div className="bg-[#000019] rounded-lg px-2 py-1 font-bold text-[10px] w-[68px] h-[35px] text-white">
				<p>{label}</p>
				<div className="flex items-center gap-1">
					<Icon
						icon="material-symbols-light:circle"
						className="text-[#25BF17] w-2 h-2"
					/>
					<p className="text-[10px]">{payload[0]?.value}</p>
				</div>
			</div>
		);
	}
};

export default function InvestorReportBarchart() {
	return (
		<div className="p-4 rounded-lg border-gray-300 border w-full flex-1 h-[500px]">
			<header className="flex justify-between items-center pb-10">
				<h3 className="text-[24px] font-medium">Investors</h3>
				<p>Last Month</p>
			</header>

			{/* chart  */}
			<ResponsiveContainer className="pb-20" width="100%" height="100%">
				<BarChart width={500} height={300} data={data}>
					<XAxis
						dataKey="month"
						tick={{ fontSize: 11, color: 'black', fontWeight: '600' }}
						interval={0}
					/>
					<YAxis tick={{ fontSize: 14, color: 'black', fontWeight: '600' }} />
					<Bar
						dataKey="usersJoined"
						fill="#D3F2D1"
						barSize={8}
						radius={5}
						activeBar={<Rectangle fill="#25BF17" />}
					/>
					<Tooltip cursor={{ fill: 'transparent' }} content={renderTooltip} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
