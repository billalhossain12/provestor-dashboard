import { Icon } from '@iconify/react/dist/iconify.js';
import RedStar from '../../../components/UI/RedStar';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	addPropertyImage,
	removePropertyImage,
} from '../../../redux/slices/propertyFileUploadSlice';

type TUploadThumbnailImageProps = {
	showError: boolean;
};

export default function UploadPropertyImage({
	showError,
}: TUploadThumbnailImageProps) {
	const dispatch = useAppDispatch();
	const { propertyImages } = useAppSelector(state => state.propertyFileUpload);

	return (
		<div className="flex lg:gap-[3rem] gap-[1.5rem] lg:flex-row flex-col">
			<div>
				<h5 className="font-semibold mb-2">
					Upload Property Images <RedStar />
				</h5>
				<div
					onClick={() => document?.getElementById('propertyImage')?.click()}
					className={`border-[1px] border-gray-300 bg-[#F4F5FA] rounded-md p-[1rem]  h-full flex flex-col gap-2 justify-center items-center cursor-pointer duration-300 ${
						!propertyImages.length && showError
							? 'border-red-200'
							: 'border-[#e7e4e4]'
					}`}
				>
					<Icon
						className="text-[5rem] text-[#44b63a9a]"
						icon="line-md:cloud-upload-outline-loop"
					/>
					<div className="flex items-center gap-2 text-primary">
						<Icon className="text-[1.3rem]" icon="ri:download-cloud-fill" />
						<h5>Upload Images</h5>
					</div>
					<p className="text-[14px] text-gray-500">
						Upload documents of an property.
					</p>
					<p className="text-gray-500 text-[12px]">
						File Format{' '}
						<span className="font-bold text-black">jpeg, png, jpg</span>{' '}
						Recommened Size{' '}
						<span className="font-bold text-black">600x600 (1:1)</span>
					</p>
					<input
						id="propertyImage"
						className="hidden"
						type="file"
						name="propertyImage"
						onChange={e => dispatch(addPropertyImage(e.target.files?.[0]))}
					/>
				</div>
				{!propertyImages.length && showError && (
					<p className="text-[14px] text-red-500">File is required</p>
				)}
			</div>

			<div className="flex-1">
				<h5 className="font-semibold mb-3">
					Uploaded File <RedStar />
				</h5>
				<div className="space-y-[1rem]">
					{/* item -1  */}
					{propertyImages.map(item => (
						<div
							key={item.id}
							className="border-[1px] border-primary bg-[#17AB310D] flex items-center justify-between p-3 w-full"
						>
							<p className="font-semibold text-[14px]">{item?.file?.name}</p>
							<Icon
								onClick={() => dispatch(removePropertyImage(item.id))}
								className="text-red-500 bg-[#FF00001A] rounded-full p-1 text-[1.5rem] cursor-pointer"
								icon="material-symbols:delete-outline"
							/>
						</div>
					))}
					{!propertyImages.length && (
						<p className="text-gray-500 py-5">
							No images are uploaded yet.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
