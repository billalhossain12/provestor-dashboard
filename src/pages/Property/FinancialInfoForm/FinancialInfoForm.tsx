import ProvestorForm from '../../../components/Form/ProvestorForm';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorInputWithLeftIcon from '../../../components/Form/ProvestorInputWithLeftIcon';
import ProvestorInput from '../../../components/Form/ProvestorInput';

export default function FinancialInfoForm() {
	const navigate = useNavigate();
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
		navigate('/property/add-porperty/risk-and-financing-details');
	};
	return (
		<main>
			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
					<ProvestorInput
						type="text"
						name="annualAppreciationReturns"
						label="Annual Appreciation Returns"
						placeholder="Enter text here"
						required={true}
					/>
					<ProvestorInputWithLeftIcon
						type="text"
						name="annualRent"
						label="Annual Rent (value)"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						type="text"
						name="expenses"
						label="Expenses"
						required={true}
						placeholder="12345"
					/>
					<ProvestorInputWithLeftIcon
						type="text"
						name="expenses"
						label="Total Annual Cash Flow / Dividend"
						required={true}
						placeholder="12345"
					/>
				</div>
				<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[1.5rem] gap-5">
					<button onClick={()=>navigate(-1)} type='button' className="hover:bg-primary text-black hover:text-white border-[1px] border-[#0E0E0E] hover:border-primary duration-200 text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center">
						Previous
					</button>
					<button type='submit' className="bg-primary text-white text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center">
						Nex
					</button>
				</div>
			</ProvestorForm>
		</main>
	);
}
