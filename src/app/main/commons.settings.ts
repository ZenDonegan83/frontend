import {environment} from "../../environments/environment";

const API_URL = `${environment.baseURL}`;

export class SETTINGS {

	public static UPLOAD_IMAGE_SIZE_MAX_MB = 25;
	public static UPLOAD_IMAGE_ALLOWED_EXTENSIONS = ['jpg', 'png', 'jpeg'];

	public static ENDPOINTS = {
		uploadImage: {
			headerParam: {
				isFileUpload: true
			},
			url: `${API_URL}/storage/uploadImage`,
			type: 'POST'
		},
	}
}

// url: '/storage/uploadImage',


