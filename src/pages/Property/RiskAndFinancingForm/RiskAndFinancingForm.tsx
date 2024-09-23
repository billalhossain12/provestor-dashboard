import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import ProvestorInputWithLeftIcon from '../../../components/Form/ProvestorInputWithLeftIcon';
import ProvestorInput from '../../../components/Form/ProvestorInput';

const riskScaleOptions = [
	{ label: 'Low', value: 'Low' },
	{ label: 'Medium', value: 'Medium' },
	{ label: 'High', value: 'High' },
];
const holdPeriodOptions = [
	{ label: '5-7 Years', value: '5-7 Years' },
	{ label: '7-14 Years', value: '7-14 Years' },
];
const strategicFinancingOptions = [
	{ label: 'Yes', value: 'Yes' },
	{ label: 'No', value: 'No' },
];

export default function RiskAndFinancingForm() {
	const navigate = useNavigate();
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
		navigate('/property/add-porperty/documents');
	};
	return (
		<main>
			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
					<ProvestorSelect
						name="riskScale"
						label="Risk Scale"
						required={true}
						options={riskScaleOptions}
					/>
					<ProvestorSelect
						name="strategicFinancing"
						label="Strategic Financing"
						required={true}
						options={strategicFinancingOptions}
					/>
					<ProvestorInputWithLeftIcon
						name="purchasePrice"
						label="Purchase Price"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="improveAndCashReserve"
						label="Improvement and Cash Reserve"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="regLegalAndHoldingFee"
						label="Registration, Legal, and Holding Fees"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="platformFee"
						label="Platform Fee (One-time)"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="totalPropertyCost"
						label="Total Property Cost"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="loanAmount"
						label="Debt/Loan Amount"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInput
						name="financingPercentage"
						type="number"
						label="Financing %"
						required={true}
						placeholder="Enter number"
					/>
					<ProvestorInput
						name="interestRatePercentage"
						type="number"
						label="Interest Rate %"
						required={true}
						placeholder="Enter number"
					/>

					<ProvestorInputWithLeftIcon
						name="totalCapital"
						label="Total Capital From Investors"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						name="IPO"
						label="IPO Price per Share ($10)"
						type="number"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInput
						name="totalShare"
						type="number"
						label="Total Share"
						required={true}
						placeholder="Enter number"
					/>
					<ProvestorSelect
						name="holdPeriod"
						label="Hold Period"
						required={true}
						options={holdPeriodOptions}
					/>
					<ProvestorInputWithLeftIcon
						name="quarterlyAssetMgtFee"
						label="Quarterly Asset Management Fee"
						type="number"
						required={true}
						placeholder="12345"
					/>
				</div>

				<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[1.5rem] gap-5">
					<button
						onClick={() => navigate(-1)}
						type="button"
						className="hover:bg-primary text-black hover:text-white border-[1px] border-[#0E0E0E] hover:border-primary duration-200 text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
					>
						Previous
					</button>
					<button
						type="submit"
						className="bg-primary text-white text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
					>
						Nex
					</button>
				</div>
			</ProvestorForm>
		</main>
	);
}
