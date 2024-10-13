import { createSlice } from '@reduxjs/toolkit';

type TFormStepper = {
	activeStep: number;
	isLastStep: boolean;
	isFirstStep: boolean;
};

const initialState: TFormStepper = {
	activeStep: 0,
	isLastStep: false,
	isFirstStep: false,
};

const formStepperSlice = createSlice({
	name: 'formStepper',
	initialState: initialState,
	reducers: {
		setActiveStep(state, action) {
			state.activeStep = action.payload;
		},
		setIsLastStep(state, action) {
			state.isLastStep = action.payload;
		},
		setIsFirstStep(state, action) {
			state.isFirstStep = action.payload;
		},
	},
});

export const { setActiveStep, setIsFirstStep, setIsLastStep } =
	formStepperSlice.actions;

export default formStepperSlice.reducer;
