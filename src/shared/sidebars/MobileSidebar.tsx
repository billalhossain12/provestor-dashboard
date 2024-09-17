import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { setActiveStyles } from '../../utils/setActiveStyles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleMobileSidebar } from '../../redux/slices/mobileSidebarSlice';
export default function MobileSidebar() {
	const dispatch = useAppDispatch();
	const { showMobileSidebar } = useAppSelector(state => state.mobileSidebar);
	const handleSidebarToggle = () => {
		dispatch(toggleMobileSidebar());
	};
	return (
		<aside
			className={` bg-white w-[17.44rem] absolute shadow-custom px-[1.5rem] duration-500 ${
				showMobileSidebar ? 'left-0' : 'left-[-900px]'
			}`}
		>
			<div className="fixed w-[15rem] bg-white">
				<div className="flex justify-end mt-5">
					<Icon
						onClick={handleSidebarToggle}
						className="text-[1.5rem] text-red-500 cursor-pointer"
						icon="gridicons:cross"
					/>
				</div>
				<Link to="/admin">
					<h3 className="text-[2rem] font-bold text-primary my-[2rem]">
						Provestor
					</h3>
				</Link>
			</div>

			<div className="h-screen overflow-y-auto pb-[5rem] leftSideBar pt-[10rem]">
				<ul className="space-y-[2rem]">
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="/admin"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon className="text-[1.5rem]" icon="ic:round-dashboard" />
							<span>Dashboard</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="investors"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="heroicons:user-group-solid"
							/>
							<span>Investors</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="property"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon className="text-[1.5rem]" icon="mdi:land-plots-marker" />
							<span>Property</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="contact"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="material-symbols:contact-mail"
							/>
							<span>Contact</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="reports"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon className="text-[1.5rem]" icon="mdi:report-arc" />
							<span>Reports</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={handleSidebarToggle}
							to="notifications"
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="tdesign:notification-filled"
							/>
							<span>Send Notifications</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="careers"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="solar:case-minimalistic-bold"
							/>
							<span>Careers</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="values"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="iconoir:stats-down-square-solid"
							/>
							<span>Values</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="settings"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="fluent:settings-24-filled"
							/>
							<span>Settings</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="chat-support"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="fluent:person-support-24-filled"
							/>
							<span>Chat Support</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="faq"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon className="text-[1.5rem]" icon="material-symbols:quiz" />
							<span>FAQ</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="archives"
							onClick={handleSidebarToggle}
							className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
							style={setActiveStyles}
							end
						>
							<Icon
								className="text-[1.5rem]"
								icon="material-symbols:archive-sharp"
							/>
							<span>Archives</span>
						</NavLink>
					</li>
				</ul>

				<div className="flex items-center gap-[1rem] p-[0.75rem] mt-[8rem] hover:text-red-500 cursor-pointer duration-100">
					<Icon className="text-[1.5rem]" icon="solar:logout-2-bold" />
					<span>Log Out</span>
				</div>
			</div>
		</aside>
	);
}
