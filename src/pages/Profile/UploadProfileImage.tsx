import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import RedStar from '../../components/UI/RedStar';

export default function UploadProfileImage() {
	const [selectedFile, setSelectedFile] = useState<File[]>([]);
	const [showError, setShowError] = useState(false);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setSelectedFile(Array.from(e.target.files));
		}
	};
	return (
		<div
			onClick={() => document?.getElementById('propertyImage')?.click()}
		>
			<div className="md:w-[180px] w-full">
				<div className='h-[150px] flex flex-col'>

                    <div className='flex-1'>
                    {selectedFile.length > 0 ? (
						<img className='md:h-full h-[100px]' src={`${URL.createObjectURL(selectedFile?.[0])}`} alt="" />
					) : <div className='flex justify-center items-center h-full text-[3rem] text-primary cursor-pointer'><Icon icon="icon-park-outline:upload-one" /></div>}
                    </div>
                    
					<div className="flex items-center gap-2 text-white bg-primary cursor-pointer px-5 py-2 w-full">
						<Icon className="text-[1.3rem]" icon="ri:download-cloud-fill" />
						<h5>Upload Image</h5>
					</div>
				</div>

				<input
					id="propertyImage"
					className="hidden"
					type="file"
					name="propertyImage"
					onChange={handleFileChange}
				/>
			</div>
		</div>
	);
}
