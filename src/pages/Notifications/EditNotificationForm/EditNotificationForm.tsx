import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import ProvestorFileInput from '../../../components/Form/ProvestorFileInput';
import ProvestorInput from '../../../components/Form/ProvestorInput';
import ProvestorTextArea from '../../../components/Form/ProvestorTextArea';
import ProvestorDatePicker from '../../../components/Form/ProvestorDatePicker';
import { notificationSchema } from '../../../schemas/notificationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const investorOptions = [
	{ label: '123456 John', value: '123456 John' },
	{ label: '654321 Alice', value: '654321 Alice' },
	{ label: '789012 Bob', value: '789012 Bob' },
	{ label: '345678 Emma', value: '345678 Emma' },
	{ label: '987654 Olivia', value: '987654 Olivia' },
	{ label: '234567 James', value: '234567 James' },
	{ label: '876543 Michael', value: '876543 Michael' },
	{ label: '456789 Sarah', value: '456789 Sarah' },
	{ label: '321098 Liam', value: '321098 Liam' },
	{ label: '567890 Sophia', value: '567890 Sophia' },
];

export default function EditNotificationForm() {
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
	};
	return (
		<main>
			<ProvestorForm
				onSubmit={handleSubmit}
				resolver={yupResolver(notificationSchema)}
			>
				<div className="flex items-center justify-between mb-[2rem]">
					<h3 className="md:text-[1.25rem] text-[1rem] font-medium">
						Update Notification
					</h3>
					<button
						type="submit"
						className="flex items-center md:text-[18px] text-[1rem] font-bold justify-center gap-3 bg-primary md:px-8 px-4 py-2 text-white"
					>
						Update Notification
					</button>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[4rem] gap-y-[1.5rem] mb-[2.5rem]">
					<ProvestorInput name="title" type="text" placeholder="Title" />
					<div className="md:row-span-4">
						<ProvestorFileInput
							name="image"
							placeholder="Upload an image of owner"
							type="file"
						/>
					</div>
					<div className="min-h-[150px]">
						<ProvestorTextArea name="description" placeholder="Description" />
					</div>
					<ProvestorSelect
						name="investor"
						placeholder="Select Investor"
						options={investorOptions}
						isMulti={true}
					/>
					<ProvestorDatePicker name="date" placeholder="Select date" />
				</div>
			</ProvestorForm>
		</main>
	);
}
