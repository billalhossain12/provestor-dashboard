import { Icon } from '@iconify/react/dist/iconify.js';
import ProgressAndLineChart from './ProgressAndLineChart';
import PropertyReportBarchart from './PropertyReportBarchart';
import PropertyReportCards from './PropertyReportCards';
import PropertyReportPieChart from './PropertyReportPieChart';
import PropertyInvestmentList from './PropertyInvestmentList';

export default function PropertyReports() {
	return (
		<main>
			<div className="mb-[2rem] flex md:flex-row flex-col justify-between md:items-center md:gap-0 gap-3">
				<h3 className="text-[1.25rem] font-medium text-[#45464E]">
					Property Reports
				</h3>
				<button className="bg-primary w-[170px] px-3 py-2 text-white flex items-center justify-between gap-3">
					<p>Property Type </p>
					<Icon className='text-[1.3rem]' icon="solar:alt-arrow-down-line-duotone" />
				</button>
			</div>
			<PropertyReportCards />
			<div className="flex lg:flex-row flex-col items-center gap-10 mb-[2.5rem] bg-white shadow-custom">
				<PropertyReportBarchart />
				<PropertyReportPieChart />
			</div>
			<ProgressAndLineChart />
			<PropertyInvestmentList/>
		</main>
	);
}
