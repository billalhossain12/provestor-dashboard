import { createSlice } from "@reduxjs/toolkit";


type NotificationType = {
    showNotificationModal:boolean;
}

const initialState:NotificationType = {
    showNotificationModal: false
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        toggleNotificationModal(state) {
            state.showNotificationModal = !state.showNotificationModal;
        },
        hideNotificationModal(state) {
            state.showNotificationModal = false;
        }
    }
})

export const { toggleNotificationModal, hideNotificationModal } = notificationSlice.actions;

export default notificationSlice.reducer;