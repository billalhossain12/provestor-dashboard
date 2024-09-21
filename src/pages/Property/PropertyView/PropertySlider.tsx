import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Icon } from '@iconify/react/dist/iconify.js';

const swiperConfig = {
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		1200: {
			slidesPerView: 4,
		},
	},
};

export default function PropertySlider() {
	const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
	const [isEnd, setIsEnd] = useState<boolean>(false);
	const [isBeginning, setIsBeginning] = useState<boolean>(false);

	const handleNext = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();
			setIsEnd(swiperInstance.isEnd);
			setIsBeginning(swiperInstance.isBeginning);
		}
	};

	const handlePrev = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();
			setIsBeginning(swiperInstance.isBeginning);
			setIsEnd(swiperInstance.isEnd);
		}
	};

	return (
		<div className='flex items-center max-w-[1000px]'>
			<button
				className={`${
					isBeginning ? 'text-gray-300' : ''
				}`}
				onClick={handlePrev}
				disabled={isBeginning}
			>
				<Icon className='text-[2.5rem]' icon="solar:alt-arrow-left-line-duotone" />
			</button>
			<Swiper
				onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
				{...swiperConfig}
			>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 5</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='bg-gray-300 px-[5rem] py-[2rem] rounded-lg'>Slider 6</div>
				</SwiperSlide>
			</Swiper>

			

			<button
				className={`${
					isEnd ? 'text-gray-300' : ''
				}`}
				onClick={handleNext}
				disabled={isEnd}
			>
				<Icon className='text-[2.5rem]' icon="solar:alt-arrow-right-line-duotone" />
			</button>
		</div>
	);
}
