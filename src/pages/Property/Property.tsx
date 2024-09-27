import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import PropertyCards from "./PropertyCards/PropertyCards";
import PropertyList from "./PropertyList/PropertyList";

export default function Property() {
  return (
    <main className="mx-[2px]">
      <div className='flex items-center justify-between mb-[2rem]'>
				<h3 className="text-[1.25rem] font-medium">Property</h3>
				<Link to="add-porperty/property-details">
				<button className='flex items-center text-[18px] font-bold justify-center gap-3 bg-primary px-8 py-2 text-white'>
					<Icon className='text-[1.3rem]' icon="ic:twotone-plus" />
					<p>Add Property</p>
				</button>
				</Link>
			</div>
      <PropertyCards/>
      <PropertyList/>
    </main>
  )
}