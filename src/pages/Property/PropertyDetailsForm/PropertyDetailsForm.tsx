import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProvestorDatePicker from '../../../components/Form/ProvestorDatePicker';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import ProvestorInput from '../../../components/Form/ProvestorInput';
import ProvestorSelect from '../../../components/Form/ProvestorSelect';
import ProvestorTextArea from '../../../components/Form/ProvestorTextArea';
import AmenityCustomSelector from './AmenityCustomSelector/AmenityCustomSelector';
import { useAppSelector } from '../../../redux/hooks';

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
	const { amenities } = useAppSelector(state => state.amenitySelect);
	const selectedAmenities = amenities
		.filter(item => item.selected)
		.map(item => ({ title: item.title, quantity: item.quantity }));

	const handleSubmit: SubmitHandler<FieldValues> = data => {
		console.log({ ...data, amenities: selectedAmenities });
		navigate('/property/add-porperty/financial-informations');
	};
	return (
		<main>
			<ProvestorForm onSubmit={handleSubmit}>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
					<ProvestorSelect
						name="type"
						label="Property Type"
						required={true}
						options={propertyTypeOptions}
						placeholder="Select Property"
					/>

					<AmenityCustomSelector />

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
							name="tenantOrRentalProcessDescription"
							label="Tenant/Rental Process - Description"
							placeholder="Enter text here"
							required={true}
						/>
					</div>
					<ProvestorInput
						type="text"
						name="location"
						label="Location"
						required={true}
						placeholder="Enter Location"
					/>
					<ProvestorInput
						type="text"
						name="lattitude"
						label="Location Lattitude"
						required={true}
						placeholder="Enter Location Lattitude"
					/>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="about"
							label="About Product/Property"
							placeholder="Enter text here"
							required={true}
						/>
					</div>

					<ProvestorInput
						type="text"
						name="longitude"
						label="Location Longitude"
						required={true}
						placeholder="Enter Location Longitude"
					/>
					<ProvestorInput
						type="number"
						name="anticipateMonthlyRent"
						label="Anticipated Monthly Rent"
						required={true}
						placeholder="Enter Location"
					/>
					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="highlights"
							label="Highlights"
							placeholder="Enter text here"
							required={true}
						/>
					</div>
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
					<ProvestorDatePicker
						name="anticipatedDividendDate"
						label="Anticipated Dividend Date"
						required={true}
						placeholder="Select date"
					/>

					<div className="md:col-span-2 md:row-span-2">
						<ProvestorTextArea
							name="managementDescription"
							label="Property Management Description"
							placeholder="Enter text here"
							required={true}
						/>
					</div>
					<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[0.2rem] gap-5">
						<button
							type="submit"
							className="bg-primary text-white text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
						>
							Nex
						</button>
					</div>
				</div>
			</ProvestorForm>
		</main>
	);
}
