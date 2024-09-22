import { Icon } from '@iconify/react/dist/iconify.js';
import {
	decreaseAmenity,
	increaseAmenity,
} from '../../../../redux/slices/amenitySelectSlice';
import { useAppDispatch } from '../../../../redux/hooks';

type TAmenity = {
	item: {
		id: string;
		title: string;
		quantity: number;
		selected: boolean;
	};
};

export default function AmenityItem({ item }: TAmenity) {
	const dispatch = useAppDispatch();
	return (
		<div
			onClick={() => alert('Hi')}
			className="flex justify-between items-center select-none hover:bg-gray-200 border-b-[1px] border-[#E5E5E5] p-4 cursor-pointer"
		>
			<h5>{item.title}</h5>
			<div className="flex items-center gap-5">
				<button
					disabled={item.quantity ? false : true}
					onClick={e => {
						e.stopPropagation();
						dispatch(decreaseAmenity(item.id));
					}}
					className={`rounded-full h-[1.5rem] w-[1.5rem] flex items-center justify-center text-white ${
						item.quantity == 0 ? 'bg-gray-500' : 'bg-primary'
					}`}
				>
					<Icon icon="ic:baseline-minus" />
				</button>
				<div className="w-[30px] text-center">{item.quantity}</div>
				<button
					onClick={e => {
						e.stopPropagation();
						dispatch(increaseAmenity(item.id));
					}}
					className="bg-primary rounded-full h-[1.5rem] w-[1.5rem] flex items-center justify-center text-white"
				>
					<Icon icon="ic:baseline-plus" />
				</button>
			</div>
		</div>
	);
}
