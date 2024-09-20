import { Icon } from '@iconify/react/dist/iconify.js';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorInput from '../../../components/Form/ProvestorInput';
import ProvestorTextArea from '../../../components/Form/ProvestorTextArea';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { addCareerSchema } from '../../../schemas/addCareerSchema';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const jobLocationsOptions = [
	{ label: 'Office', value: 'office' },
	{ label: 'Remote', value: 'remote' },
	{ label: 'Hybrid', value: 'hybrid' },
	{ label: 'On-site', value: 'on_site' },
];

const jobTypesOptions = [
	{ label: 'Full-Time', value: 'full_time' },
	{ label: 'Part-Time', value: 'part_time' },
	{ label: 'Contract', value: 'contract' },
	{ label: 'Internship', value: 'internship' },
	{ label: 'Freelance', value: 'freelance' },
];

export default function AddCareerForm() {
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log('Submitted form data ===> ', data);
	};
	return (
		<div className="bg-white shadow-custom md:min-h-screen min-h-[100%] pb-10 md:mb-0 mb-[1rem]">
			<div className="flex items-center md:gap-[2rem] gap-[1rem] md:px-[2rem] px-[1rem] py-[1rem]">
				<div className="flex items-center md:gap-3 gap-2 border-[1px] border-gray-300 md:px-4 px-2 py-1 cursor-pointer">
					<Icon className="text-[1.5rem]" icon="mingcute:left-line" />
					Back
				</div>
				<h3 className="text-[1.25rem] font-semibold">Add Career</h3>
			</div>

			<ProvestorForm
				onSubmit={handleSubmit}
				resolver={yupResolver(addCareerSchema)}
			>
				<div className="grid md:grid-cols-2 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] md:px-[3rem] px-[1.5rem] md:pt-[2rem] pt-[1rem]">
					<ProvestorInput
						type="text"
						name="title"
						label="Title"
						required={true}
						placeholder="Enter title here"
					/>
					<div className="md:row-span-3">
						<ProvestorTextArea
							name="description"
							label="Job Description"
							required={true}
							placeholder="Enter job description here"
						/>
					</div>
					<ProvestorSelect
						name="location"
						label="Location"
						required={true}
						options={jobLocationsOptions}
						placeholder="Select job location"
					/>
					<ProvestorSelect
						name="type"
						label="Type"
						required={true}
						options={jobTypesOptions}
						placeholder="Select job type"
					/>
					<div className="md:col-span-2 flex justify-end">
						<button className="bg-primary px-[3rem] py-[0.5rem] text-white">
							Submit
						</button>
					</div>
				</div>
			</ProvestorForm>
		</div>
	);
}
