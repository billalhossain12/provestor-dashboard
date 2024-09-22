import { Icon } from '@iconify/react/dist/iconify.js';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { deSelectAmenity, toggleAmenity } from '../../../../redux/slices/amenitySelectSlice';
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
				<div className='flex items-center justify-between gap-1 border-[1px] border-[#D9D9D9] p-[3px] min-h-[44px] w-full cursor-pointer'>
				<div className="flex items-center flex-wrap gap-1">
					{
						amenities.filter(item => item.selected).map(item => (<div key={item.id} className="border-[1px] select-none h-[35px] border-primary px-2 py-1 bg-[#24B24B26] text-primary flex items-center gap-2">
							<Icon
							onClick={(e)=>{
								e.stopPropagation();
								dispatch(deSelectAmenity(item.id))
							}}
								className="border-[1px] border-primary hover:border-red-300 hover:bg-red-100 hover:text-red-500 rounded-full p-[2px] text-[1.3rem]"
								icon="oui:cross"
							/>
							<p className='bg-primary h-[70%] w-[1px]'></p>
							<div>
								<span>{item.quantity}</span>
								<span className='ml-2'>{item.title}</span>
							</div>
						</div>))
					}
				</div>
				<Icon className='min-w-[1.5rem] min-h-[1.5rem]' icon="ic:baseline-keyboard-arrow-down" />
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
					{amenities.filter(item => !item.selected).length == 0 && <p className='text-gray-400 font-semibold text-center'>No options</p>}
					<AddNewAmenityButton />
				</div>
			)}
		</div>
	);
}
