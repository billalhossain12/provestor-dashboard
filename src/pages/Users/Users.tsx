import { Link } from 'react-router-dom';
import UserCards from './UserCards/UserCards';
import UsersList from './UsersList/UsersList';

export default function Users() {
	return (
		<main className='mx-[2px]'>
			<div className="flex items-center justify-between mb-[2rem]">
				<h3 className="text-[1.25rem] font-medium">Users</h3>
				<Link to="blocked-users">
					<button className="flex items-center justify-center gap-3 bg-primary px-8 py-2 text-white">
						Blocked Users
					</button>
				</Link>
			</div>
            <UserCards/>
            <UsersList/>
		</main>
	);
}
