import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileUploadError} from "../../../../../../../core/models/file-upload-error";
import {FileValidator} from "../../../../../../../core/validators/file.validator";
import {ImageCroppedEvent} from "ngx-image-cropper";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-consent-form-image-upload-section',
    templateUrl: './consent-form-image-upload-section.component.html',
    styleUrls: ['./consent-form-image-upload-section.component.scss']
})
export class ConsentFormImageUploadSectionComponent implements OnInit, OnDestroy {

    selectedFile: File = null;
    fileToUpload: File = null;

    fileUploadError: FileUploadError = new FileUploadError();

    isImageLoaded = false;
    imageChangedEvent: any = '';
    croppedImage: any = '';

    maintainAspectRatio;
    aspectRatio;
    resizeToWidth;

    constructor(public dialogRef: MatDialogRef<ConsentFormImageUploadSectionComponent>,) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    selectFile(event) {
        this.selectedFile = event.target.files[0];
        this.fileUploadError = FileValidator.isValidFile(this.selectedFile);

        if (!this.fileUploadError.hasError) {
            this.imageChangedEvent = event;
        } else {
            this.imageChangedEvent = '';
            this.isImageLoaded = false;
        }
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        //this.fileToUpload = new File([event.file], 'cropped-image.jpg');

        const imageName = 'name.png';
        //const imageBlob = this.dataURItoBlob(event.base64);
        this.fileToUpload = new File([event.base64], imageName, { type: 'image/png' });
    }



    imageLoaded() {
        this.isImageLoaded = true;
    }

    loadImageFailed() {
        this.isImageLoaded = false;
        //this.alertService.showToaster("Image failed to load !", SETTINGS.TOASTER_MESSAGES.error);
    }

    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/png' });
        return blob;
    }

    onSave() {
        console.log(this.fileToUpload);
        this.dialogRef.close(this.fileToUpload);
    }

    onCancelClick() {
        this.dialogRef.close(false);
    }

    isValidUpload() {
        return this.fileToUpload != null && !this.fileUploadError.hasError;
    }
}
