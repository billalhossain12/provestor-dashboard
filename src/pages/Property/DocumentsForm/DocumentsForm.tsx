import { Icon } from '@iconify/react/dist/iconify.js';
import ProvestorForm from '../../../components/Form/ProvestorForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function DocumentsForm() {
	const navigate = useNavigate();
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
			<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[1.5rem] gap-5">
					<button
						onClick={() => navigate(-1)}
						type="button"
						className="hover:bg-primary text-black hover:text-white border-[1px] border-[#0E0E0E] hover:border-primary duration-200 text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
					>
						Previous
					</button>
					<button
						type="submit"
						className="bg-primary text-white text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
					>
						Submit
					</button>
				</div>
			</ProvestorForm>
		</main>
	);
}
