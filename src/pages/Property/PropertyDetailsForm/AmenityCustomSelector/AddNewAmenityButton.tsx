import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { addAmenity, hideAmenityInput, showAmenityInput } from "../../../../redux/slices/amenitySelectSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AddNewAmenityButton() {
    const dispatch = useAppDispatch();
	const { amenityInputVisible } = useAppSelector(
		state => state.amenitySelect
	);
	const [amenityTitle, setAmenityTitle] = useState('');
	const [showError, setShowError] = useState(false);
	return (
		<div className="mt-3">
			{amenityInputVisible ? (
				<div className="mt-3">
					<input
						className="px-4 py-[10px] w-full outline-none border-[1px] border-gray-300 h-full"
						placeholder="Enter amenity title"
						type="text"
						onChange={e => setAmenityTitle(e.target.value)}
					/>
					{showError && !amenityTitle && (
						<p className="text-red-500 text-[14px] text-right">
							Amenity title is required*
						</p>
					)}
					<div className="flex items-center gap-5 justify-end mt-3">
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
								if (!amenityTitle) {
									return setShowError(true);
								}
								dispatch(hideAmenityInput());
								dispatch(addAmenity(amenityTitle));
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
	);
}
