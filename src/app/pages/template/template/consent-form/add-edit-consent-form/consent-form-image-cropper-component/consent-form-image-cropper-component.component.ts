import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StorageService} from "../../../../../../core/services/storage.service";
import {
  ConsentFormImageUploadSectionComponent
} from "./consent-form-image-upload-section/consent-form-image-upload-section.component";

@Component({
  selector: 'app-consent-form-image-cropper-component',
  templateUrl: './consent-form-image-cropper-component.component.html',
  styleUrls: ['./consent-form-image-cropper-component.component.scss']
})
export class ConsentFormImageCropperComponentComponent implements OnInit {

  @Input('imageUrl') imageUrl;
  @Input('maintainAspectRatio') maintainAspectRatio;
  @Input('aspectRatio') aspectRatio;
  @Input('resizeToWidth') resizeToWidth;

  @Input('viewPortMaxWidth') viewPortMaxWidth;
  @Input('viewPortMaxHeight') viewPortMaxHeight;

  @Output('onImageCropped') onImageCropped = new EventEmitter();

  showImageUpload;
  imageSrc;

  constructor(public dialog: MatDialog,
              private storageService: StorageService) {
  }

  ngOnInit() {
    if (this.imageUrl) {
      this.storageService.loadImage(this.imageUrl).subscribe((result: any) => {
        const reader = new FileReader();
        reader.onload = (e) => this.imageSrc = e.target.result;
        reader.readAsDataURL(new Blob([result]));
      });
    } else {
      this.imageSrc = './assets/img/default-image.jpg';
    }
  }

  onImageHover() {
    this.showImageUpload = true;
  }

  onImageLeave() {
    this.showImageUpload = false;
  }

  openImageUpload() {
    const dialogRef = this.dialog.open(ConsentFormImageUploadSectionComponent, {
      width: '70%',
      panelClass: 'custom-dialog-panel',
      data: {
        maintainAspectRatio: this.maintainAspectRatio,
        aspectRatio: this.aspectRatio,
        resizeToWidth: this.resizeToWidth
      }
    });

    const dialogSubs = dialogRef.afterClosed()
        .subscribe((response) => {
          if (response) {
            this.onImageCropped.emit(response);
          }
          dialogSubs.unsubscribe();
        });
  }

  getSectionStyles() {
    return {
      'max-width': this.viewPortMaxWidth,
      'max-height': this.viewPortMaxHeight
    };
  }

  getUploadImageTextStyles() {
    return {
      'max-width': this.viewPortMaxWidth
    };
  }

  getImageStyles() {
    return {
      'max-width': this.viewPortMaxWidth,
      'max-height': this.viewPortMaxHeight
    };
  }
}
