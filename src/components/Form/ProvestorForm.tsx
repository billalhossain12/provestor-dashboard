import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFormConfig = {
	defaultValues?: Record<string, any>;
	resolver?: any;
};

type TFormProps = {
	children: ReactNode;
	onSubmit: SubmitHandler<Record<string, any>>;
} & TFormConfig;

export default function ProvestorForm({
	onSubmit,
	children,
	defaultValues,
	resolver,
}: TFormProps) {
	const formConfig: TFormConfig = {};
	if (defaultValues) {
		formConfig.defaultValues = defaultValues;
	}

	if (resolver) {
		formConfig.resolver = resolver;
	}

	//   const submit = (data) => {
	//     onSubmit(data, methods);
	//   };

	const methods = useForm(formConfig);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
}
