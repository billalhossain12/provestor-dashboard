import { Outlet } from "react-router-dom";
import Header from "../shared/headers/Header";
import Sidebar from "../shared/sidebars/Sidebar";

export default function MainLayout() {
  return (
    <main>
        <Header/>
       <section className="flex">
       <Sidebar/>
       <div className="mt-[6.6rem] ml-[2rem]">
        <Outlet/>
       </div>
       </section>
    </main>
  )
}