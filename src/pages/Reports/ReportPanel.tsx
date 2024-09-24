import { NavLink, Outlet } from "react-router-dom";

type ActiveStylesProps = {
	isActive: boolean;
};

export const setActiveStyles = ({ isActive }: ActiveStylesProps) => ({
	borderBottom: isActive ? '3px solid #25BF17' : '',
	color: isActive ? '#25BF17' : '#858585',
	fontWeight: isActive ? '600' : '',
});

export default function ReportPanel() {
  return (
    <main>
      <div className="flex items-center gap-[3rem] text-[1.25rem] border-b-[1px] border-b-gray-300 mb-[2rem] px-5">
        <NavLink className="pb-3" style={setActiveStyles} to="" end>Investors</NavLink>
        <NavLink className="pb-3" style={setActiveStyles} to="property">Property</NavLink>
      </div>
      <Outlet/>
    </main>
  )
}