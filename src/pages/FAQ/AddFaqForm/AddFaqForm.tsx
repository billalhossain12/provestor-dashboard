import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorInput from '../../../components/Form/ProvestorInput';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import ProvestorTextArea from '../../../components/Form/ProvestorTextArea';
import { yupResolver } from '@hookform/resolvers/yup';
import { addFaqSchema } from '../../../schemas/addFaqSchema';

const categoryOptions = [
	{
		label: 'Residential Housing',
		value: 'Residential Housing',
	},
	{
		label: 'Commercial Real Estate',
		value: 'Commercial Real Estate',
	},
];

export default function AddFaqForm() {
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
	};
	return (
		<div className='mb-[2rem]'>
            <ProvestorForm onSubmit={handleSubmit} resolver={yupResolver(addFaqSchema)}>
			<div className="flex items-center justify-between mb-[2rem]">
				<h3 className="text-[1.25rem] font-medium">Add New FAQ</h3>
				<button className="flex items-center justify-center gap-3 bg-primary px-8 py-2 text-white">
					Submit
				</button>
			</div>

			<div className="space-y-[1.5rem] md:max-w-[70%] md:mx-[2rem]">
				<ProvestorSelect
					name="category"
					options={categoryOptions}
					placeholder="Select Category"
				/>
				<ProvestorInput
					name="question"
					type="text"
					placeholder="Enter Question"
				/>
				<div className="h-[200px]">
					<ProvestorTextArea name="answer" placeholder="Enter Answer" />
				</div>
			</div>
		</ProvestorForm>
        </div>
	);
}
