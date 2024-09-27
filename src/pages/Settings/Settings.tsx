import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorForm from '../../components/Form/ProvestorForm';
import ProvestorSelect from '../../components/Form/ProvestorSelect';
import Switch from 'react-switch';
import { useState } from 'react';

const languageOptions = [
	{ label: 'English', value: 'english' },
	{ label: 'Bengali', value: 'bengali' },
	{ label: 'Hindi', value: 'hindi' },
	{ label: 'Urdu', value: 'urdu' },
];

const timeZoneOptions = [
	{ label: 'Bangladesh Standard Time (BST)', value: 'BST' }, // UTC+6
	{ label: 'Pakistan Standard Time (PKT)', value: 'PKT' }, // UTC+5
	{ label: 'Indian Standard Time (IST)', value: 'IST' }, // UTC+5:30
	{ label: 'Pacific Standard Time (PST)', value: 'PST' }, // UTC-8 (USA)
	{ label: 'Mountain Standard Time (MST)', value: 'MST' }, // UTC-7 (USA)
	{ label: 'Central Standard Time (CST)', value: 'CST' }, // UTC-6 (USA)
	{ label: 'Eastern Standard Time (EST)', value: 'EST' }, // UTC-5 (USA)
];

const currencyOptions = [
	{ label: 'Bangladeshi Taka (BDT)', value: 'BDT' },
	{ label: 'Indian Rupee (INR)', value: 'INR' },
	{ label: 'Pakistani Rupee (PKR)', value: 'PKR' },
	{ label: 'US Dollar (USD)', value: 'USD' },
];

export default function Settings() {
	const [personalizedNotification, setPersonalizedNotification] =
		useState(true);
	const [investorNotification, setInvestorNotification] =
		useState(false);
	const [newFeatureNotification, setNewFeatureNotification] =
		useState(true);
	const [securityNotification, setSecurityNotification] =
		useState(false);
	const [marketingNotification, setMarketingNotification] =
		useState(true);

	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log('Submitted form data ===> ', data);
	};
	return (
		<div className="bg-white shadow-custom h-[99%] pb-10 md:mb-0 m-[2px] p-[1.5rem]">
			<h3 className="text-[1.25rem] font-semibold mb-[1.5rem]">Settings</h3>

			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-3 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] mb-[2rem]">
					<ProvestorSelect
						name="currency"
						label="Currency"
						required={true}
						options={currencyOptions}
						placeholder="Select currency"
					/>
					<ProvestorSelect
						name="timeZone"
						label="Time zone"
						required={true}
						options={timeZoneOptions}
						placeholder="Select time zone"
					/>
					<ProvestorSelect
						name="language"
						label="Language"
						required={true}
						options={languageOptions}
						placeholder="Select language"
					/>
				</div>
				<h3 className="text-[1.25rem] font-semibold mb-[1.5rem]">
					Notifications
				</h3>

				<div className="mb-[5rem]">
					{/* Notification-1  */}
					<div
						className={`text-[1.25rem] duration-200 mb-[1.5rem] ${
							personalizedNotification
								? 'text-black font-bold'
								: 'text-gray-500'
						}`}
					>
						<div className="flex items-center justify-between">
							<p
								onClick={() =>
									setPersonalizedNotification(!personalizedNotification)
								}
								className="cursor-pointer select-none flex-1"
							>
								<div>
									<h3 className="text-[1rem] font-semibold mb-1">
										Personalized Offers
									</h3>
									<p className="text-gray-500 text-[14px] font-normal">
										Receive offers made special for you
									</p>
								</div>
							</p>
							<Switch
								checked={personalizedNotification}
								onChange={value => setPersonalizedNotification(value)}
								offColor="#DFEAF2"
								onColor="#24B24B"
								offHandleColor="#fff"
								onHandleColor="#fff"
								activeBoxShadow="0 0 0 0"
								value={false}
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</div>
					</div>
					{/* Notification-2  */}
					<div
						className={`text-[1.25rem] duration-200 mb-[1.5rem] ${
							investorNotification
								? 'text-black font-bold'
								: 'text-gray-500'
						}`}
					>
						<div className="flex items-center justify-between">
							<p
								onClick={() =>
									setInvestorNotification(!investorNotification)
								}
								className="cursor-pointer select-none flex-1"
							>
								<div>
									<h3 className="text-[1rem] font-semibold mb-1">
										Investors notifications
									</h3>
									<p className="text-gray-500 text-[14px] font-normal">
										Get notified about new investors
									</p>
								</div>
							</p>
							<Switch
								checked={investorNotification}
								onChange={value => setInvestorNotification(value)}
								offColor="#DFEAF2"
								onColor="#24B24B"
								offHandleColor="#fff"
								onHandleColor="#fff"
								activeBoxShadow="0 0 0 0"
								value={false}
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</div>
					</div>
          	{/* Notification-3  */}
					<div
						className={`text-[1.25rem] duration-200 mb-[1.5rem] ${
							newFeatureNotification
								? 'text-black font-bold'
								: 'text-gray-500'
						}`}
					>
						<div className="flex items-center justify-between">
							<p
								onClick={() =>
									setNewFeatureNotification(!newFeatureNotification)
								}
								className="cursor-pointer select-none flex-1"
							>
								<div>
									<h3 className="text-[1rem] font-semibold mb-1">
                  New Features
									</h3>
									<p className="text-gray-500 text-[14px] font-normal">
                  Updates about new features and product releases
									</p>
								</div>
							</p>
							<Switch
								checked={newFeatureNotification}
								onChange={value => setNewFeatureNotification(value)}
								offColor="#DFEAF2"
								onColor="#24B24B"
								offHandleColor="#fff"
								onHandleColor="#fff"
								activeBoxShadow="0 0 0 0"
								value={false}
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</div>
					</div>
          	{/* Notification-4  */}
					<div
						className={`text-[1.25rem] duration-200 mb-[1.5rem] ${
							securityNotification
								? 'text-black font-bold'
								: 'text-gray-500'
						}`}
					>
						<div className="flex items-center justify-between">
							<p
								onClick={() =>
									setSecurityNotification(!securityNotification)
								}
								className="cursor-pointer select-none flex-1"
							>
								<div>
									<h3 className="text-[1rem] font-semibold mb-1">
                  Security and Billing
									</h3>
									<p className="text-gray-500 text-[14px] font-normal">
                  Account security and notifications about billing
									</p>
								</div>
							</p>
							<Switch
								checked={securityNotification}
								onChange={value => setSecurityNotification(value)}
								offColor="#DFEAF2"
								onColor="#24B24B"
								offHandleColor="#fff"
								onHandleColor="#fff"
								activeBoxShadow="0 0 0 0"
								value={false}
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</div>
					</div>
          	{/* Notification-5  */}
					<div
						className={`text-[1.25rem] duration-200 mb-[1.5rem] ${
							marketingNotification
								? 'text-black font-bold'
								: 'text-gray-500'
						}`}
					>
						<div className="flex items-center justify-between">
							<p
								onClick={() =>
									setMarketingNotification(!marketingNotification)
								}
								className="cursor-pointer select-none flex-1"
							>
								<div>
									<h3 className="text-[1rem] font-semibold mb-1">
                  Marketing
									</h3>
									<p className="text-gray-500 text-[14px] font-normal">
                  Receive marketing newsletters about our new products.
									</p>
								</div>
							</p>
							<Switch
								checked={marketingNotification}
								onChange={value => setMarketingNotification(value)}
								offColor="#DFEAF2"
								onColor="#24B24B"
								offHandleColor="#fff"
								onHandleColor="#fff"
								activeBoxShadow="0 0 0 0"
								value={false}
								uncheckedIcon={false}
								checkedIcon={false}
							/>
						</div>
					</div>
				</div>

				<div className="md:col-span-2 flex justify-end">
					<button className="bg-primary px-[3rem] py-[0.5rem] text-white">
						Submit
					</button>
				</div>
			</ProvestorForm>
		</div>
	);
}
