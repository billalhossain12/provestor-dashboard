type ActiveStylesProps = {
	isActive: boolean;
};

export const setActiveStyles = ({ isActive }: ActiveStylesProps) => ({
	backgroundColor: isActive ? '#24B24B' : '',
	color: isActive ? '#fff' : '',
	fontWeight: isActive ? '600' : '400',
});
