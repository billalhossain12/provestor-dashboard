import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorForm from '../../components/Form/ProvestorForm';
import ProvestorInput from '../../components/Form/ProvestorInput';

export default function Profile() {
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log('Submitted form data ===> ', data);
	};
	return (
		<div className="bg-white shadow-custom h-[99%] pb-10 md:mb-0 m-[2px] p-[1.5rem]">
			<ProvestorForm onSubmit={handleSubmit}>
				<h3 className="text-[1.25rem] font-semibold mb-[1.5rem]">Profile</h3>
				<div className="grid md:grid-cols-3 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] mb-[2rem]"></div>

				<h3 className="text-[1.25rem] font-semibold mb-[1.5rem]">
					Change Password
				</h3>
				<div className="grid md:grid-cols-3 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] mb-[2rem]">
					<ProvestorInput
						type="text"
						name="currentPassword"
						label="Current Password"
						required={true}
						placeholder="Enter current password"
					/>
					<ProvestorInput
						type="text"
						name="newPassword"
						label="New Password"
						required={true}
						placeholder="Enter new password"
					/>
					<ProvestorInput
						type="text"
						name="confirmPassword"
						label="Confirm Password"
						required={true}
						placeholder="Enter confirm password"
					/>
				</div>

				<div className="md:col-span-2 flex justify-end">
					<button className="bg-primary px-[3rem] py-[0.5rem] text-white">
						Save
					</button>
				</div>
			</ProvestorForm>
		</div>
	);
}
