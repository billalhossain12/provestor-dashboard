import ProgressAndLineChart from "./ProgressAndLineChart";
import PropertyReportBarchart from "./PropertyReportBarchart";
import PropertyReportCards from "./PropertyReportCards";
import PropertyReportPieChart from "./PropertyReportPieChart";

export default function PropertyReports() {
	return (
		<main>
			<h3 className="text-[1.25rem] font-medium text-[#45464E] mb-[2rem]">
				Property Reports
			</h3>
			<PropertyReportCards/>
			<div className='flex lg:flex-row flex-col items-center gap-10 mb-[2.5rem] bg-white shadow-custom'>
			<PropertyReportBarchart />
			<PropertyReportPieChart/>
			</div>
			<ProgressAndLineChart/>
		</main>
	);
}
