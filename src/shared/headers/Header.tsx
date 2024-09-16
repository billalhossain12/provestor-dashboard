import { Icon } from "@iconify/react/dist/iconify.js";
import profilePhotoImg from "../../assets/profile-photo.jpg"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-custom fixed w-full px-[3rem] py-[1rem] flex items-center">
        <Link to="/admin"><h3 className="text-[2rem] font-bold text-primary">Provestor</h3></Link>

        <div className="flex justify-between items-center w-full">
          <p className="ml-[7rem]">Search Input Field</p>

          <div className="flex items-center">
          <div className="bg-[#24b24a28] p-1 rounded-sm"><Icon className="text-[2rem] text-primary" icon="carbon:notification-filled" /></div>
          <div className="flex items-center ml-[2.5rem] gap-3">
            <img className="w-[3.5rem] h-[3.5rem] rounded-md" src={profilePhotoImg} alt="Profile Photo" />
            <div>
              <h3 className="font-semibold">Billal Hossain</h3>
              <h5 className="text-[0.875rem]">Admin</h5>
            </div>
          </div>
          </div>

        </div>
    </header>
  )
}