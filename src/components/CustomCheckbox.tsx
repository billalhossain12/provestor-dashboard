import { forwardRef } from 'react';
import { Checkbox } from '@material-tailwind/react';

interface TCustomCheckboxProps {
	name: string;
	checked?: boolean;
	disabled?: boolean;
	ref?:HTMLInputElement;
	onClick?: (event: React.MouseEvent<HTMLInputElement> | undefined) => void;
}

export const CustomCheckbox = forwardRef<HTMLInputElement, TCustomCheckboxProps>(
	({ name, checked = false, disabled = false, onClick = undefined }, ref) => {
		// handle checkbox on change event
		const handleOnChange = () => {
			return;
		};

		return (
			<Checkbox
				ref={ref}
				color="green"
				ripple={true}
				className="text-primary checked:bg-primary checked:border-primary hover:before:bg-primary hover:before:opacity-10 checked:before:bg-primary"
				name={name}
				aria-label={name}
				checked={checked}
				disabled={disabled}
				onClick={onClick}
				onChange={handleOnChange}
			/>
		);
	}
);