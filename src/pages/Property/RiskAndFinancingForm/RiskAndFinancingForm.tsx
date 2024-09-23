import { Icon } from '@iconify/react/dist/iconify.js';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';

const riskScaleOptions = [
	{ label: 'High', value: 'High' },
	{ label: 'Medium', value: 'Medium' },
];

export default function RiskAndFinancingForm() {
	const navigate = useNavigate();
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
		navigate('/property/add-porperty/documents');
	};
	return (
		<main className="bg-white shadow-custom p-[1rem] h-[100%] pb-[5rem]">
			<div className="flex items-center md:gap-[2rem] gap-[1rem] pb-[3rem]">
				<div
					onClick={() => navigate(-1)}
					className="flex items-center md:gap-3 gap-2 border-[1px] border-gray-300 md:px-4 px-2 py-1 cursor-pointer"
				>
					<Icon className="text-[1.3rem]" icon="mingcute:left-line" />
					Back
				</div>
				<h3 className="md:text-[1.25rem] text-[1rem] font-semibold">
					Add Property
				</h3>
			</div>
			<p className="mb-[2rem]">Risk and Financial Details Stepper </p>

			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
					<ProvestorSelect name="riskScale" options={riskScaleOptions} />
				</div>

				<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[0.5rem]">
					<button className="bg-primary text-white px-[3rem] text-[18px] font-bold py-2">
						Nex
					</button>
				</div>
			</ProvestorForm>
		</main>
	);
}
