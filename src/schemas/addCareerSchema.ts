import * as yup from 'yup';
const requiredMsg = 'This field is requred';

export const addCareerSchema = yup.object({
	title: yup.string().required(requiredMsg),
	description: yup.string().required(requiredMsg),
	location: yup.object().required(requiredMsg),
	type: yup.object().required(requiredMsg),
});
