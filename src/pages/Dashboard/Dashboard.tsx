import DashboardOverView from "./DashboardOverView/DashboardOverView";
import InvestmentList from "./InvestmentList/InvestmentList";
import LatestInvestmentList from "./LatestInvestmentList/LatestInvestmentList";
import PropertyOverViewCards from "./PropertyOverView/PropertyOverViewCards";
import TopInvestorAndLocationWrapper from "./TopInvestorAndLocationWrapper/TopInvestorAndLocationWrapper";


export default function Dashboard() {
  return (
    <main className="mx-[2px]">
      <DashboardOverView/>
      <PropertyOverViewCards/>
      <InvestmentList/>
      <LatestInvestmentList/>
      <TopInvestorAndLocationWrapper/>
    </main>
  )
}