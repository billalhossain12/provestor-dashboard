import { createSlice } from '@reduxjs/toolkit';

type TMobileSidebar = {
	showMobileSidebar: boolean;
};

const initialState: TMobileSidebar = {
	showMobileSidebar: false,
};

const mobileSidebarSlice = createSlice({
	name: 'mobileSidebar',
	initialState: initialState,
	reducers: {
		toggleMobileSidebar(state) {
			state.showMobileSidebar = !state.showMobileSidebar;
		},
		hideMobileSidebar(state) {
			state.showMobileSidebar = false;
		},
	},
});

export const { toggleMobileSidebar, hideMobileSidebar } =
	mobileSidebarSlice.actions;

export default mobileSidebarSlice.reducer;
