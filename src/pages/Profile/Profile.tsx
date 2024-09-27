import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorForm from '../../components/Form/ProvestorForm';
import ProvestorInput from '../../components/Form/ProvestorInput';
import UploadProfileImage from './UploadProfileImage';
import RedStar from '../../components/UI/RedStar';

export default function Profile() {
	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log('Submitted form data ===> ', data);
	};
	const handleSubmitPassword: SubmitHandler<FieldValues> = data => {
		console.log('Submitted form data ===> ', data);
	};
	return (
		<div className="bg-white shadow-custom h-[99%] pb-10 md:mb-0 m-[2px] p-[1.5rem]">
			{/* Form 1  */}
			<section>
				<ProvestorForm onSubmit={handleSubmit}>
					<h3 className="text-[1.25rem] font-semibold mb-[1.5rem]">Profile</h3>
					<div className="grid md:grid-cols-3 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] mb-[2rem]">
						<div className="md:row-span-2">
						<h5 className="font-semibold mb-2">
							Profile Image <RedStar />
						</h5>
						<div className='flex justify-center items-center'>
							<UploadProfileImage />
						</div>
						</div>
						<ProvestorInput
							type="text"
							name="firstName"
							label="First Name"
							required={true}
							placeholder="Enter first name"
						/>
						<ProvestorInput
							type="text"
							name="lastName"
							label="Last Name"
							required={true}
							placeholder="Enter last name"
						/>
						<ProvestorInput
							type="text"
							name="email"
							label="Email Address"
							required={true}
							placeholder="Enter confirm password"
						/>
						<ProvestorInput
							type="text"
							name="phone"
							label="Phone Number"
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
			</section>

			{/* Form 2  */}
			<section className="mt-[5rem]">
				<ProvestorForm onSubmit={handleSubmitPassword}>
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
			</section>
		</div>
	);
}
