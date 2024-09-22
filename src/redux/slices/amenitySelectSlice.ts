import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type TAmenitySelect = {
	id: string;
	amenity: string;
	quantity: number;
	selected: boolean;
};

const initialState: TAmenitySelect[] = [
	{
		id: '123456789',
		amenity: 'Beds',
		quantity: 0,
		selected: false,
	},
];

const amenitySelectSlice = createSlice({
	name: 'amenitySelect',
	initialState: initialState,
	reducers: {
		addAmenity(state, action) {
			state.push({
				id: uuidv4(),
				amenity: action.payload,
				quantity: 0,
				selected: false,
			});
		},
		deleteAmenity(state, action) {
			return state.filter(item => item.id !== action.payload);
		},
		increaseAmenity(state, action) {
			state.map(item => {
				if (item.id === action.payload) {
					item.quantity = item.quantity + 1;
				}
				return item;
			});
		},
		decreaseAmenity(state, action) {
			state.map(item => {
				if (item.id === action.payload) {
					item.quantity = item.quantity - 1;
				}
				return item;
			});
		},
	},
});

export const { addAmenity, deleteAmenity, increaseAmenity, decreaseAmenity } =
	amenitySelectSlice.actions;

export default amenitySelectSlice.reducer;
