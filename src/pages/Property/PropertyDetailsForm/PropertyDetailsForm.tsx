import { Icon } from '@iconify/react/dist/iconify.js';
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
