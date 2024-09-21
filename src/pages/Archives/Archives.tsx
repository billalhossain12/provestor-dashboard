import InvestorsArchivedList from './InvestorsArchivedList/InvestorsArchiveList';
import PropertiesArchivedList from './PropertiesArchivedList/PropertiesArchivedList';

export default function Archives() {
	return (
		<main>
			<h3 className="text-[1.25rem] font-medium mb-[2rem]">Archive Data</h3>
			<InvestorsArchivedList />
			<PropertiesArchivedList />
		</main>
	);
}
