import { Stepper, Step, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
	setIsFirstStep,
	setIsLastStep,
} from '../redux/slices/formStepperSlice';

export function FormStepper() {
	const dispatch = useAppDispatch();
	const { activeStep } = useAppSelector(state => state.formStepper);

	return (
		<div className="w-full px-14 py-2 mb-[5.5rem]">
			<Stepper
				activeStep={activeStep}
				isLastStep={value => dispatch(setIsLastStep(value))}
				isFirstStep={value => dispatch(setIsFirstStep(value))}
				activeLineClassName="bg-primary"
			>
				<Step
					activeClassName="border-[1px] border-primary !bg-white"
					completedClassName="!bg-primary"
				>
					{activeStep === 0 ? (
						<p className="text-black font-bold text-[1.25rem]">
							{activeStep + 1}
						</p>
					) : (
						<Icon icon="uiw:check" />
					)}
					<div className="absolute -bottom-[2.5rem] w-max text-center">
						<Typography
							className={`font-bold ${
								activeStep === 0 ? 'text-black' : 'text-primary'
							}`}
						>
							Property Details
						</Typography>
					</div>
				</Step>

				<Step
					completedClassName="!bg-primary !text-primary"
					activeClassName="!text-black border-primary !text-gray-900"
					className="!bg-white border-[1px] border-gray-400 text-gray-400"
				>
					{activeStep <= 1 ? (
						<p className="text-[1.25rem]">2</p>
					) : (
						<Icon
							className={`${activeStep > 1 ? 'text-white' : ''}`}
							icon="uiw:check"
						/>
					)}
					<div className="absolute -bottom-[2.5rem] w-max text-center">
						<Typography className={`${activeStep >= 1 && 'font-semibold'}`}>
							Financial Information and Analysis
						</Typography>
					</div>
				</Step>

				<Step
					completedClassName="!bg-primary !text-primary"
					activeClassName="!text-black border-primary !text-gray-900"
					className="!bg-white border-[1px] border-gray-400 text-gray-400"
				>
					{activeStep <= 2 ? (
						<p className="text-[1.25rem]">3</p>
					) : (
						<Icon
							className={`${activeStep > 2 ? 'text-white' : ''}`}
							icon="uiw:check"
						/>
					)}
					<div className="absolute -bottom-[2.5rem] w-max text-center">
						<Typography className={`${activeStep >= 2 && 'font-semibold'}`}>
							Risk and Financing Details
						</Typography>
					</div>
				</Step>

				<Step
					completedClassName="!bg-primary !text-primary"
					activeClassName="!text-black border-primary !text-gray-900"
					className="!bg-white border-[1px] border-gray-400 text-gray-400"
				>
					{activeStep <= 3 ? (
						<p className="text-[1.25rem]">4</p>
					) : (
						<Icon
							className={`${activeStep > 3 ? 'text-white' : ''}`}
							icon="uiw:check"
						/>
					)}
					<div className="absolute -bottom-[2.5rem] w-max text-center">
						<Typography className={`${activeStep >= 3 && 'font-semibold'}`}>
							Documents
						</Typography>
					</div>
				</Step>
			</Stepper>
		</div>
	);
}
