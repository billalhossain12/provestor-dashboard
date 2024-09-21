import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { setActiveStyles } from '../../utils/setActiveStyles';
export default function Sidebar() {
	return (
		<aside className="h-screen bg-white w-[17.44rem] fixed shadow-custom pt-[7.5rem] px-[1.5rem] overflow-y-auto pb-[5rem] leftSideBar md:block hidden">
			<ul className="space-y-[2rem]">
				<li>
					<NavLink
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
						to="investors"
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
						end
					>
						<Icon className="text-[1.5rem]" icon="heroicons:user-group-solid" />
						<span>Investors</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="users"
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
					>
						<Icon className="text-[1.5rem]" icon="fa-solid:user" />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="property"
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
					>
						<Icon className="text-[1.5rem]" icon="mdi:land-plots-marker" />
						<span>Property</span>
					</NavLink>
				</li>
				<li>
					<NavLink
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
						to="notifications"
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
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
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
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
						className="flex items-center gap-[1rem] p-[0.75rem] hover:text-primary duration-200"
						style={setActiveStyles}
						end
					>
						<Icon className="text-[1.5rem]" icon="fluent:settings-24-filled" />
						<span>Settings</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="chat-support"
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
		</aside>
	);
}
