import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/not-found.svg';
export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center pb-[5rem] text-center px-5">
			<img
				className="md:max-w-[500px] max-w-[300px]"
				src={notFoundImage}
				alt="Not Found Image"
			/>
			<h3 className="md:text-[3.1rem] text-[1.5rem] font-bold md:mt-[-4rem] mt-[-3rem]">
				Oops! Page Not Found
			</h3>
			<div className="md:text-[2rem] text-[1rem] font-semibold text-[#565656] md:my-[2rem] my-[1rem] md:space-y-[1rem] space-y-[0.5rem]">
				<p>The page you’re looking for isn’t found </p>
				<p>We suggest you go back to home </p>
			</div>
			<Link to="/admin">
				<button className="bg-primary text-white px-8 py-2">Reload</button>
			</Link>
		</main>
	);
}
