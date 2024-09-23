import React from 'react';
import { Stepper, Step, Button, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react/dist/iconify.js';

export function FormStepper(props: any) {
	const [activeStep, setActiveStep] = React.useState(0);
	const [isLastStep, setIsLastStep] = React.useState(false);
	const [isFirstStep, setIsFirstStep] = React.useState(false);

	const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1);

	return (
		<div className="w-full px-14 py-2">
			<Stepper
				{...props}
				activeStep={activeStep}
				isLastStep={value => setIsLastStep(value)}
				isFirstStep={value => setIsFirstStep(value)}
				activeLineClassName="bg-primary"
			>
				<Step
					{...props}
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
							{...props}
							className={`font-bold ${
								activeStep === 0 ? 'text-black' : 'text-primary'
							}`}
						>
							Property Details
						</Typography>
					</div>
				</Step>

				<Step
					{...props}
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
						<Typography
							{...props}
							className={`${activeStep >= 1 && 'font-semibold'}`}
						>
							Financial Information and Analysis
						</Typography>
					</div>
				</Step>

				<Step
					{...props}
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
						<Typography
							{...props}
							className={`${activeStep >= 2 && 'font-semibold'}`}
						>
							Risk and Financing Details
						</Typography>
					</div>
				</Step>

				<Step
					{...props}
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
						<Typography
							{...props}
							className={`${activeStep >= 3 && 'font-semibold'}`}
						>
							Documents
						</Typography>
					</div>
				</Step>
			</Stepper>

			<div className="mt-32 flex justify-between">
				<Button onClick={handlePrev} disabled={isFirstStep}>
					Prev
				</Button>
				<Button onClick={handleNext} disabled={isLastStep}>
					Next
				</Button>
			</div>
		</div>
	);
}
