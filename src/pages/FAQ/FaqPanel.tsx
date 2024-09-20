import { Outlet } from "react-router-dom";
import FaqList from "./FaqList/FaqList";

export default function FaqPanel() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}