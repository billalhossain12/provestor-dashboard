import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import UploadDocument from './UploadDocument';
import { FormEvent, useState } from 'react';
import UploadThumbnailImage from './UploadThumbnailImage';
import UploadPropertyImage from './UploadPropertyImage';
import { useAppSelector } from '../../../redux/hooks';

export default function DocumentsForm() {
	const navigate = useNavigate();
	const {
		propertyDocumentLinks,
		propertyDocuments,
		propertyImageThumbnails,
		propertyImages,
	} = useAppSelector(state => state.propertyFileUpload);
	const [showError, setShowError] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (
			!propertyDocumentLinks.length ||
			!propertyDocuments.length ||
			!propertyImageThumbnails.length ||
			!propertyImages
		) {
			return setShowError(true);
		}
		console.log('Submit Now......');
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

			<form onSubmit={handleSubmit}>
				<UploadDocument showError={showError} />
				<UploadThumbnailImage showError={showError} />
				<UploadPropertyImage showError={showError} />
			</form>

			<div className="md:col-span-3 flex justify-end md:mt-[3rem] mt-[1.5rem] gap-5">
				<button
					onClick={() => navigate(-1)}
					type="button"
					className="hover:bg-primary text-black hover:text-white border-[1px] border-[#0E0E0E] hover:border-primary duration-200 text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
				>
					Previous
				</button>
				<button
					onClick={handleSubmit}
					type="button"
					className="bg-primary text-white text-[18px] font-bold py-2 md:w-[150px] w-[100px] text-center"
				>
					Submit
				</button>
			</div>
		</main>
	);
}
