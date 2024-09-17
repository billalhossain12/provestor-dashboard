import { Outlet } from "react-router-dom";
import HeaderWrapper from "../shared/headers/HeaderWrapper";
import SidebarWrapper from "../shared/sidebars/SidebarWrapper";

export default function MainLayout() {
  return (
    <main>
        <HeaderWrapper/>
       <section className="flex">
       <SidebarWrapper/>
       <div className="md:mt-[6.6rem] mt-[9rem] ml-[2rem]">
        <Outlet/>
       </div>
       </section>
    </main>
  )
}