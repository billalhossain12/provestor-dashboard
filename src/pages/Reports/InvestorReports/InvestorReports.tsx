import InvestorReportBarchart from './InvestorReportBarchart';
import InvestorReportCards from './InvestorReportCards';
import InvestorReportPieChart from './InvestorReportPieChart';
import TopInvestorReportList from './TopInvestorReportList';

export default function InvestorReports() {
	return (
		<main>
			<h3 className="text-[1.25rem] font-medium text-[#45464E] mb-[2rem]">
				Investors Reports
			</h3>
			<InvestorReportCards />
			<div className='flex items-center gap-10 mb-[2.5rem] bg-white'>
			<InvestorReportBarchart />
			<InvestorReportPieChart/>
			</div>
			<TopInvestorReportList />
		</main>
	);
}
