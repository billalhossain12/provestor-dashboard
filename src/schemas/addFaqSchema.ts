import * as yup from 'yup';

export const addFaqSchema = yup.object({
	category: yup.object().required('Category is required'),
	question: yup.string().required('Question is required'),
	answer: yup.string().required('Answer is required'),
});
