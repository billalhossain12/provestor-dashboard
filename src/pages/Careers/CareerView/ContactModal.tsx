import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';

import { Icon } from '@iconify/react/dist/iconify.js';

export function AppliedViewModal() {
	const [size, setSize] = useState<
		'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | null
	>(null);

	const handleOpen = (value: 'xl' | null) => setSize(value);

	return (
		<>
			<div
				onClick={() => handleOpen('xl')}
				className="flex space-x-2 border-[1px] border-gray-800 p-2 rounded-md cursor-pointer"
			>
				<Icon className="text-[1.5rem]" icon="carbon:view-filled" />
			</div>
			<div>
				<Dialog
					open={
						size === 'xs' ||
						size === 'sm' ||
						size === 'md' ||
						size === 'lg' ||
						size === 'xl' ||
						size === 'xxl'
					}
					size={size || 'md'}
					handler={handleOpen}
				>
					<DialogHeader className="flex justify-end">
						<div
							onClick={() => handleOpen(null)}
							className="text-red-500 bg-[#FF00231A] border-[1px] border-red-500 cursor-pointer p-1 hover:bg-red-500 hover:text-white duration-300"
						>
							<Icon icon="gridicons:cross" />
						</div>
					</DialogHeader>
					<DialogBody className="lg:h-auto h-[22rem] overflow-scroll">
						<h3 className="md:text-[28px] text-[20px] font-bold md:mb-[2.5rem] mb-[1.5rem]">
							Job Description
						</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
							porro perferendis cumque rem doloremque eum ex facilis quo,
							asperiores necessitatibus veritatis. Nam iste accusantium nesciunt
							sequi ipsam officia facilis assumenda reprehenderit. Consequuntur
							amet deleniti odio aliquam, excepturi sed, veritatis dolorem
							blanditiis aspernatur, minima eaque reiciendis. Reiciendis magnam
							perferendis blanditiis nesciunt fuga voluptate non provident,
							distinctio saepe ipsam omnis aut quas. Quia aliquam laudantium
							pariatur! A veritatis asperiores, rerum nihil nostrum non quasi
							perferendis deserunt provident quis doloremque voluptatibus quam
							ipsam distinctio eveniet quae! Facere mollitia quam totam iste
							ipsam nihil minima, incidunt, quos commodi nam ad autem, id
							suscipit beatae.
						</p>
					</DialogBody>
				</Dialog>
			</div>
		</>
	);
}
