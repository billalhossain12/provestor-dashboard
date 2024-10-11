import { Icon } from '@iconify/react/dist/iconify.js';
import { FormEvent, useState } from 'react';

export default function Login() {
	const [isVisible, setIsVisible] = useState(false);

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		alert('Submit Form Data');
	};
	return (
		<section className="bg-[url('/map-frame.svg')] bg-contain h-screen flex justify-center items-center mx-2">
			<div
				style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.20)' }}
				className="rounded-[10px] md:min-w-[400px] min-w-full md:p-10 p-5 bg-white"
			>
				<h1 className="text-[2.5rem] font-bold">Provestor</h1>
				<h2 className="text-[1.5rem] font-semibold my-[1rem]">Login</h2>
				<form>
					<div className="mb-[1.5rem]">
						<label className="block font-semibold mb-1" htmlFor="email">
							Email
						</label>
						<div className="relative">
							<input
								className="outline-none border-[1px] px-[12px] py-2 w-full duration-300 border-[#D9D9D9] pl-8"
								type="email"
								id="email"
								placeholder="example@gmail.com"
							/>
							<Icon
								className="absolute left-3 top-[14px]"
								icon="ic:round-email"
							/>
						</div>
					</div>
					<div>
						<label className="block font-semibold mb-1" htmlFor="password">
							Password
						</label>
						<div className="relative">
							<input
								className="outline-none border-[1px] px-[12px] py-2 w-full duration-300 border-[#D9D9D9] pl-8"
								type={isVisible ? 'text' : 'password'}
								id="password"
							/>
							<Icon
								className="absolute left-3 top-[14px]"
								icon="mdi:password"
							/>
							{isVisible ? (
								<Icon
									onClick={() => setIsVisible(!isVisible)}
									className="absolute right-3 top-[14px] cursor-pointer"
									icon="codicon:eye-closed"
								/>
							) : (
								<Icon
									onClick={() => setIsVisible(!isVisible)}
									className="absolute right-3 top-[14px] cursor-pointer"
									icon="fluent:eye-12-filled"
								/>
							)}
						</div>
					</div>
					<h3 className="font-bold text-[14px] text-right my-2">
						Forgot Password?
					</h3>
					<button
						onClick={handleLogin}
						className="bg-primary text-white flex justify-center items-center w-full p-2 text-[18px] font-bold"
					>
						Login
					</button>
				</form>
			</div>
		</section>
	);
}
