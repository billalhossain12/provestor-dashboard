import { Outlet } from "react-router-dom";
import HeaderWrapper from "../shared/headers/HeaderWrapper";
import SidebarWrapper from "../shared/sidebars/SidebarWrapper";

export default function MainLayout() {
  return (
    <main>
        <HeaderWrapper/>
       <section className="flex">
       <SidebarWrapper/>
       <div className="md:mt-[6rem] mt-[8.2rem] md:ml-[19.44rem] ml-[1rem] md:mr-[2rem] mr-[1rem] flex-1">
        <Outlet/>
       </div>
       </section>
    </main>
  )
}