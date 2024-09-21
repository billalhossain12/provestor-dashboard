import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';

const propertyTypeOptions = [
  {
    label:'Residential Housing (RH)',
    value:'Residential Housing (RH)',
  },
  {
    label:'Commercial Real Estate (CRE)',
    value:'Commercial Real Estate (CRE)',
  },
]

export default function PropertyDetailsForm() {
	const navigate = useNavigate();
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
	};
	return (
		<main className="bg-white shadow-custom p-[1rem] h-screen">
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
			<p>Form Stepper here.....</p>

			<ProvestorForm onSubmit={handleSubmit}>
        <ProvestorSelect name='propertyType' label='Property Type' required={true} options={propertyTypeOptions}/>
      </ProvestorForm>
		</main>
	);
}
