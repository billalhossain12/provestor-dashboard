import * as yup from 'yup';
import { fileValidationSchema } from './fileValidationSchema';

export const notificationSchema = yup.object({
	title: yup.string().required('Title is required'),
	description: yup.string().required('Description is required'),
	investor: yup.array().required('Investor is required'),
	date: yup.string().required('Date is required'),
	image: fileValidationSchema,
});
