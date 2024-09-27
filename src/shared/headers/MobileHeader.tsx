import { Icon } from '@iconify/react/dist/iconify.js';
import profilePhotoImg from '../../assets/profile-photo.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import NotificationModal from '../../pages/NotificationModal/NotificationModal';
import { toggleNotificationModal } from '../../redux/slices/notificationSlice';
import { toggleMobileSidebar } from '../../redux/slices/mobileSidebarSlice';


export default function MobileHeader() {
	const dispatch = useAppDispatch();
	const { showNotificationModal } = useAppSelector(state => state.notification);
	return (
		<header className="bg-white shadow-custom fixed w-full px-[1rem] pt-[0.8rem] lg:hidden z-50">
			<div className="flex justify-between items-center">
				<div className="bg-primary  text-white cursor-pointer select-none flex items-center justify-center">
				<Icon onClick={()=>dispatch(toggleMobileSidebar())} className='text-[2rem] cursor-pointer' icon="material-symbols:menu" />
				</div>

				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<div className="bg-[#24b24a28] p-1 rounded-sm">
							<Icon
								onClick={() => dispatch(toggleNotificationModal())}
								className="text-[1.5rem] text-primary cursor-pointer"
								icon="carbon:notification-filled"
							/>
							{showNotificationModal && <NotificationModal />}
						</div>
						<div className="flex items-center ml-[1rem] gap-3 select-none cursor-pointer">
							<img
								className="w-[2rem] h-[2rem] rounded-md"
								src={profilePhotoImg}
								alt="Profile Photo"
							/>
							<div>
								<h3 className="font-semibold text-[14px]">Billal Hossain</h3>
								<h5 className="text-[10px]">Admin</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="relative mt-5 mb-3">
				<input
					className="outline-none border-[1px] border-[#D9D9D9] px-[1rem] py-[0.5rem] w-full"
					type="text"
					placeholder="Search here..."
				/>
				<Icon
					className="absolute right-3 top-[9px] text-primary text-[1.5rem]"
					icon="mingcute:search-fill"
				/>
			</div>
		</header>
	);
}
