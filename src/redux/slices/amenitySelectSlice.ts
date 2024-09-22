import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type TAmenity = {
	id: string;
	title: string;
	quantity: number;
	selected: boolean;
};

type TAmenitySelect = {
	amenities: TAmenity[];
	amenityMenuVisible: boolean;
	amenityInputVisible: boolean;
};

const initialState: TAmenitySelect = {
	amenityMenuVisible: false,
	amenityInputVisible: false,
	amenities: [
		{
			id: uuidv4(),
			title: 'Beds',
			quantity: 0,
			selected: false,
		},
	],
};

const amenitySelectSlice = createSlice({
	name: 'amenitySelect',
	initialState: initialState,
	reducers: {
		toggleAmenity(state) {
			state.amenityMenuVisible = !state.amenityMenuVisible;
		},

		hideAmenity(state) {
			state.amenityMenuVisible = false;
		},

		showAmenityInput(state) {
			state.amenityInputVisible = true;
		},

		hideAmenityInput(state) {
			state.amenityInputVisible = false;
		},

		addAmenity(state, action) {
			state.amenities.push({
				id: uuidv4(),
				title: action.payload,
				quantity: 0,
				selected: false,
			});
		},

		selectAmenity(state, action) {
			state.amenities.map(item => {
				if (item.id === action.payload) {
					item.selected = true;
				}
				return item;
			});
		},

		deSelectAmenity(state, action) {
			state.amenities.map(item => {
				if (item.id === action.payload) {
					item.selected = false;
				}
				return item;
			});
		},

		deleteAmenity(state, action) {
			const filteredAmenities = state.amenities.filter(
				item => item.id !== action.payload
			);
			state.amenities = filteredAmenities;
		},

		increaseAmenity(state, action) {
			state.amenities.map(item => {
				if (item.id === action.payload) {
					item.quantity = item.quantity + 1;
				}
				return item;
			});
		},

		decreaseAmenity(state, action) {
			state.amenities.map(item => {
				if (item.id === action.payload) {
					item.quantity = item.quantity - 1;
				}
				return item;
			});
		},
	},
});

export const {
	addAmenity,
	deleteAmenity,
	increaseAmenity,
	decreaseAmenity,
	toggleAmenity,
	hideAmenity,
	showAmenityInput,
	hideAmenityInput,
	selectAmenity,
	deSelectAmenity
} = amenitySelectSlice.actions;

export default amenitySelectSlice.reducer;
