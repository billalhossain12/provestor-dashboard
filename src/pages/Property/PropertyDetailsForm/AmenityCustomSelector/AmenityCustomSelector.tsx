import { Icon } from '@iconify/react/dist/iconify.js';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { toggleAmenity } from '../../../../redux/slices/amenitySelectSlice';
import AmenityItem from './AmenityItem';
import AddNewAmenityButton from './AddNewAmenityButton';

export default function AmenityCustomSelector() {
	const dispatch = useAppDispatch();
	const { amenities, amenityMenuVisible } = useAppSelector(
		state => state.amenitySelect
	);

	return (
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
					className="mt-2 p-[1rem] bg-white absolute w-full z-50"
				>
					{amenities
						.filter(item => !item.selected)
						.map(item => (
							<AmenityItem key={item.id} item={item} />
						))}
					<AddNewAmenityButton />
				</div>
			)}
		</div>
	);
}
