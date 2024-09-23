import { Icon } from '@iconify/react/dist/iconify.js';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RedStar from '../../../components/UI/RedStar';

export default function DocumentsForm() {
	const navigate = useNavigate();
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [showError, setShowError] = useState(false);

	const handleSubmit = (e:FormEvent) => {
		e.preventDefault()
		if(!selectedFiles.length){
			return setShowError(true)
		}
		console.log(selectedFiles)
	};

	const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
		if(e.target.files?.[0]){
			const file = e.target.files?.[0];
			setSelectedFiles([...selectedFiles, file])
		}
	}

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
				{/* Upload File  */}
				<div className='flex gap-[3rem]'>
				<div>
				<h5 className="font-semibold mb-2">Upload Documents <RedStar/></h5>
				<div
					onClick={() => document?.getElementById('file')?.click()}
					className={`border-[1px] border-gray-300 rounded-md p-[1rem]  h-full flex flex-col gap-2 justify-center items-center cursor-pointer duration-300 ${
						(showError && !selectedFiles.length)  ? 'border-red-200' : 'border-[#e7e4e4]'
					}`}
				>
					<Icon
						className="text-[5rem] text-[#44b63a9a]"
						icon="line-md:cloud-upload-outline-loop"
					/>
					<div className="flex items-center gap-2 text-primary">
						<Icon className="text-[1.3rem]" icon="ri:download-cloud-fill" />
						<h5>Upload Image</h5>
					</div>
					<p className="text-[14px] text-gray-500">Upload documents of an property.</p>
					<p className="text-gray-500 text-[12px]">
						File Format <span className="font-bold text-black">jpeg, png</span>{' '}
						Recommened Size{' '}
						<span className="font-bold text-black">600x600 (1:1)</span>
					</p>
					<input
						id="file"
						className="hidden"
						type='file'
						name='file'
						onChange={handleFileChange}
					/>
				</div>
				{showError && !selectedFiles.length && <p className='text-[14px] text-red-500'>File is required</p>}
				</div>

				<div className='flex-1'>
					<h5 className='font-semibold mb-3'>Uploaded File</h5>
					<div className='space-y-[1rem]'>
						{/* item -1  */}
						{
							selectedFiles.map((item, index) => (<div key={index} className='border-[1px] border-primary bg-[#17AB310D] flex items-center justify-between p-3 w-full'>
								<p className='font-semibold text-[14px]'>{item.name}</p>
								<Icon className='text-red-500 bg-[#FF00001A] rounded-full p-1 text-[1.5rem] cursor-pointer' icon="material-symbols:delete-outline" />
							</div>))
						}
					</div>
				</div>
				</div>


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
			</form>
		</main>
	);
}
