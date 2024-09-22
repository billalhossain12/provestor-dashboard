import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import ProvestorInput from '../../../components/Form/ProvestorInput';
import ProvestorTextArea from '../../../components/Form/ProvestorTextArea';
import ProvestorDatePicker from '../../../components/Form/ProvestorDatePicker';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	addAmenity,
	decreaseAmenity,
	hideAmenityInput,
	increaseAmenity,
	showAmenityInput,
	toggleAmenity,
} from '../../../redux/slices/amenitySelectSlice';
import { useState } from 'react';

const propertyTypeOptions = [
	{
		label: 'Residential Housing (RH)',
		value: 'Residential Housing (RH)',
	},
	{
		label: 'Commercial Real Estate (CRE)',
		value: 'Commercial Real Estate (CRE)',
	},
];

export default function PropertyDetailsForm() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { amenities, amenityMenuVisible, amenityInputVisible } = useAppSelector(
		state => state.amenitySelect
	);
	const [amenityTitle, setAmenityTitle] = useState('');
	const [showError, setShowError] = useState(false);

	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
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
			<p className="mb-[2rem]">Form Stepper here.....</p>

			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
					<ProvestorSelect
						name="type"
						label="Property Type"
						required={true}
						options={propertyTypeOptions}
						placeholder="Select Property"
					/>

					<div className="relative">
						{/* Controller  */}
						<div onClick={() => dispatch(toggleAmenity())}>
							<h5 className="mb-[0.5rem]">
								Amenities <span className="text-red-500">*</span>
							</h5>
							<div className="border-[1px] border-[#D9D9D9] px-[12px] py-[21px] w-full cursor-pointer relative">
								<div className="absolute right-1 top-2 text-[1.5rem] flex items-center gap-2">
									<p className="bg-gray-400 w-[1px] h-[20px]"></p>
									<Icon icon="iconamoon:arrow-down-2" />
								</div>
							</div>
						</div>

						{/* Options  */}
						{amenityMenuVisible && (
							<div
								style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)' }}
								className="mt-2 p-[1rem] bg-white absolute w-full"
							>
								{/* options  */}
								{amenities
									.filter(item => !item.selected)
									.map(item => (
										<div
											onClick={() => alert('Hi')}
											className="flex justify-between items-center select-none hover:bg-gray-200 border-b-[1px] border-[#E5E5E5] p-4 cursor-pointer"
										>
											<h5>{item.title}</h5>
											<div className="flex items-center gap-5">
												<button
													disabled={item.quantity ? false : true}
													onClick={e => {
														e.stopPropagation();
														dispatch(decreaseAmenity(item.id));
													}}
													className={`rounded-full h-[1.5rem] w-[1.5rem] flex items-center justify-center text-white ${
														item.quantity == 0 ? 'bg-gray-500' : 'bg-primary'
													}`}
												>
													<Icon icon="ic:baseline-minus" />
												</button>
												<div className="w-[30px] text-center">
													{item.quantity}
												</div>
												<button
													onClick={e => {
														e.stopPropagation();
														dispatch(increaseAmenity(item.id));
													}}
													className="bg-primary rounded-full h-[1.5rem] w-[1.5rem] flex items-center justify-center text-white"
												>
													<Icon icon="ic:baseline-plus" />
												</button>
											</div>
										</div>
									))}


									{/* Add New Amenity  */}
								<div className="mt-3">
									{amenityInputVisible ? (
										<div className="mt-3">
											<input
												className="px-4 py-[10px] w-full outline-none border-[1px] border-gray-300 h-full"
												placeholder="Enter amenity title"
												type="text"
												onChange={e => setAmenityTitle(e.target.value)}
											/>
											{showError && !amenityTitle && <p className='text-red-500 text-[14px] text-right'>Amenity title is required*</p>}
											<div className='flex items-center gap-5 justify-end mt-3'>
											<button
												onClick={() => {
													dispatch(hideAmenityInput());
												}}
												className="flex items-center justify-center px-4 py-2 text-white select-none gap-1 bg-red-500 w-[80px] h-full"
											>
												<span>Cancel</span>
											</button>
											<button
												onClick={() => {
													if(!amenityTitle){
														return setShowError(true)
													}
													dispatch(hideAmenityInput());
													dispatch(addAmenity(amenityTitle))
												}}
												className="flex items-center justify-center px-4 py-2 text-white select-none gap-1 bg-primary w-[80px] h-full"
											>
												<span>Add</span>
											</button>
											</div>
										</div>
									) : (
										<button
											onClick={() => dispatch(showAmenityInput())}
											className="flex items-center justify-center text-white select-none gap-2 bg-primary w-full py-2 mt-3"
										>
											<Icon className="text-[1.5rem]" icon="ic:baseline-plus" />
											<span>Add New</span>
										</button>
									)}
								</div>
							</div>
						)}
					</div>

					<ProvestorInput
						type="text"
						name="ownership"
						label="Property Ownership"
						required={true}
						placeholder="Enter Property Ownership"
					/>
					<ProvestorInput
						type="text"
						name="name"
						label="Property Name"
						required={true}
						placeholder="Enter Property Name"
					/>
					<ProvestorInput
						type="number"
						name="buildYear"
						label="Property Build Year"
						required={true}
						placeholder="Enter Build Year"
					/>
					<ProvestorInput
						type="number"
						name="sqft"
						label="Square Feet (SQFT)"
						required={true}
						placeholder="Enter number"
					/>
					<ProvestorInput
						type="number"
						name="purchasePrice"
						label="Purchase Price"
						required={true}
						placeholder="Enter Purchase Price"
					/>
					<ProvestorInput
						type="text"
						name="address"
						label="Address"
						required={true}
						placeholder="Enter Address"
					/>
					<ProvestorInput
						type="number"
						name="pinCode"
						label="Pincode"
						required={true}
						placeholder="Enter Pincode"
					/>
					<ProvestorInput
						type="text"
						name="city"
						label="City"
						required={true}
						placeholder="Enter City"
					/>
					<ProvestorSelect
						options={[{ label: 'Dhaka', value: 'Dhaka' }]}
						name="state"
						label="State"
						required={true}
						placeholder="Select State"
					/>
					<ProvestorSelect
						options={[{ label: 'Banladesh', value: 'Bangladesh' }]}
						name="country"
						label="Country"
						required={true}
						placeholder="Select Country"
					/>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="about"
							label="About Product/Property"
							placeholder="Enter text here"
						/>
					</div>
					<ProvestorInput
						type="text"
						name="location"
						label="Location"
						required={true}
						placeholder="Enter Location"
					/>
					<ProvestorSelect
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						name="rentStatus"
						label="Rent Status"
						required={true}
						placeholder="Select Rent Status"
					/>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="tenantOrRentalProcessDescription"
							label="Tenant/Rental Process - Description"
							placeholder="Enter text here"
						/>
					</div>
					<ProvestorInput
						type="number"
						name="anticipateMonthlyRent"
						label="Anticipated Monthly Rent"
						required={true}
						placeholder="Enter Location"
					/>
					<ProvestorDatePicker
						name="anticipatedDividendDate"
						label="Anticipated Dividend Date"
						required={true}
						placeholder="Select date"
					/>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="highlights"
							label="Highlights"
							placeholder="Enter text here"
						/>
					</div>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="managementDescription"
							label="Property Management Description"
							placeholder="Enter text here"
						/>
					</div>
					<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[0.5rem]">
						<button className="bg-primary text-white px-[3rem] text-[18px] font-bold py-2">
							Nex
						</button>
					</div>
				</div>
			</ProvestorForm>
		</main>
	);
}
