import LocationList from "../LocationList/LocationList";
import TopInvestorList from "../TopInvesteorList/TopInvestorList";

export default function TopInvestorAndLocationWrapper() {
  return (
    <section className="grid xl:grid-cols-2 grid-cols-1 gap-[1.5rem]">
        <TopInvestorList/>
        <LocationList/>
    </section>
  )
}