import * as _ from 'underscore';
import {SETTINGS} from "../../main/commons.settings";
import {FileUploadError} from "../models/file-upload-error";

export class FileValidator {

  static allowedExtensions = SETTINGS.UPLOAD_IMAGE_ALLOWED_EXTENSIONS;
  static maximumFileSizeMB = SETTINGS.UPLOAD_IMAGE_SIZE_MAX_MB;

  public static isValidFile(file: File): FileUploadError {
    let error = new FileUploadError();

    let fileName = file.name;
    let fileExtension = fileName.split('.').pop();

    if (!_.contains(this.allowedExtensions, fileExtension.toLowerCase())) {
      error.errorMessage = `File type ${fileExtension} is not allowed`;
      error.hasError = true;
      return error;
    }

    if (((file.size) / (1024 * 1024)) > this.maximumFileSizeMB) {
      error.errorMessage = `Maximum allowed file size is ${this.maximumFileSizeMB}MB`;
      error.hasError = true;
      return error;
    }

    return error;
  }

	public static  isValidFileCustom(file: File, allowedExtensions,maximumFileSizeMB) {
	  let error = new FileUploadError();

	  let fileName = file.name;
	  let fileExtension = fileName.split('.').pop();

	  if (!_.contains(allowedExtensions, fileExtension.toLowerCase())) {
		  error.errorMessage = `File type ${fileExtension} is not allowed`;
		  error.hasError = true;
		  return error;
	  }

	  if (((file.size) / (1024 * 1024)) > maximumFileSizeMB) {
		  error.errorMessage = `Maximum allowed file size is ${maximumFileSizeMB}MB`;
		  error.hasError = true;
		  return error;
	  }

	  return error;
  }
}
