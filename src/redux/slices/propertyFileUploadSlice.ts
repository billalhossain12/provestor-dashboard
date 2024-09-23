import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type TDocument = {
	id: string;
	file: File;
};
type TDocLink = {
	id: string;
	link: string;
};
type TImageThumbnail = {
	id: string;
	file: File;
};
type TPropertyImage = {
	id: string;
	file: File;
};

type TUploadFile = {
	propertyDocuments: TDocument[];
	propertyDocumentLinks: TDocLink[];
	propertyImageThumbnails: TImageThumbnail[];
	propertyImages: TPropertyImage[];
};

const initialState: TUploadFile = {
	propertyDocuments: [],
	propertyDocumentLinks: [],
	propertyImageThumbnails: [],
	propertyImages: [],
};

const propertyFileUploadSlice = createSlice({
	name: 'propertyFileUpload',
	initialState: initialState,
	reducers: {
		// Property Docs
		addPropertyDocument(state, action) {
			state.propertyDocuments.push({ id: uuidv4(), file: action.payload });
		},
		removePropertyDocument(state, action) {
			state.propertyDocuments = state.propertyDocuments.filter(
				item => item.id !== action.payload
			);
		},

		// Property Doc Links
		addPropertyDocumentLink(state, action) {
			state.propertyDocumentLinks.push({ id: uuidv4(), link: action.payload });
		},
		removePropertyDocumentLink(state, action) {
			state.propertyDocumentLinks = state.propertyDocumentLinks.filter(
				item => item.id !== action.payload
			);
		},

		//Property image thumbnails
		addPropertyThumbnailImage(state, action) {
			state.propertyImageThumbnails.push({
				id: uuidv4(),
				file: action.payload,
			});
		},
		removePropertyThumbnailImage(state, action) {
			state.propertyImageThumbnails = state.propertyImageThumbnails.filter(
				item => item.id !== action.payload
			);
		},

		//Property images
		addPropertyImage(state, action) {
			state.propertyImages.push({ id: uuidv4(), file: action.payload });
		},
		removePropertyImage(state, action) {
			state.propertyImages = state.propertyImages.filter(
				item => item.id !== action.payload
			);
		},
	},
});

export const {
	addPropertyDocument,
	removePropertyDocument,
	addPropertyDocumentLink,
	removePropertyDocumentLink,
	addPropertyThumbnailImage,
	removePropertyThumbnailImage,
	addPropertyImage,
	removePropertyImage,
} = propertyFileUploadSlice.actions;

export default propertyFileUploadSlice.reducer;
