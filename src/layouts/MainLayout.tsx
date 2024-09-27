import { Outlet } from "react-router-dom";
import HeaderWrapper from "../shared/headers/HeaderWrapper";
import SidebarWrapper from "../shared/sidebars/SidebarWrapper";

export default function MainLayout() {
  return (
    <main className="bg-[#FAFBFC]">
        <HeaderWrapper/>
       <section className="flex">
       <SidebarWrapper/>
       <div className="lg:mt-[6rem] mt-[9rem] lg:ml-[19.44rem] ml-[1rem] lg:mr-[2rem] mr-[1rem] min-h-screen flex-1">
        <Outlet/>
       </div>
       </section>
    </main>
  )
}