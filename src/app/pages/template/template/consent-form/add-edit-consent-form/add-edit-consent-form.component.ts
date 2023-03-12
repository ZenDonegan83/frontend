import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslationService} from "../../../../../core/services/transalation.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {StorageService} from "../../../../../core/services/storage.service";
import {AddAdditionalInfoComponent} from "./add-additional-info/add-additional-info.component";
import {MatDialog} from "@angular/material/dialog";
import {CommonService} from "../../../../../core/services/common.service";
import {ToastrService} from "ngx-toastr";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'app-add-edit-consent-form',
    templateUrl: './add-edit-consent-form.component.html',
    styleUrls: ['./add-edit-consent-form.component.scss']
})
export class AddEditConsentFormComponent implements OnInit {

    //Fixme : Need to fix image uploading
    //selectedFile: any = null;

    addEditConsentForm: FormGroup;
    translation: any;
    selectedLanguage: any = "en";
    isItemOneChecked: string = 'N';

    imageSrc: any = './assets/img/default-image.jpg'
    pdfFooter: any = 'Powered by INKDSTRY';

    additionalInformationArr: any = [];
    idxCount: any = 1;

    constructor(private formBuilder: FormBuilder,
                private translationService: TranslationService,
                public dialog: MatDialog,
                private _commonService: CommonService,
                private toastr: ToastrService,
                private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.initForm();

        this.translationService.language.subscribe((res: any) => {
            this.selectedLanguage = res;
            this.translationService.get().subscribe((data: any) => {
                this.translation = data.add_edit_consent_form;
            });
        });
    }

    initForm() {
        this.addEditConsentForm = this.formBuilder.group({
            title: ["", Validators.compose([
                Validators.required
            ])],
            content: ["", Validators.compose([
                Validators.required
            ])]
        });
    }

    isControlHasError(controlName: string, validationType: string): boolean {
        const control = this.addEditConsentForm.controls[controlName];
        if (!control) {
            return false;
        }

        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }

    changeCheckbox($event: MatCheckboxChange, field: any) {

        switch (field) {
            case 'ITEM_ONE':
                $event.checked ? this.isItemOneChecked = 'Y' : this.isItemOneChecked = 'N';
                break;
        }
    }

    onSave($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        // let submitData = Object.assign({}, this.addEditConsentForm.getRawValue());
        // submitData.isItemOneChecked = this.isItemOneChecked;
        //
        // console.log(submitData);


    }

    isFormValid() {
        return this.addEditConsentForm.valid;
    }

    onImageCropped(file) {
        const formData: any = new FormData();
        formData.append("file", file, file['name']);

        //Fixme : Need to fix image uploading
        /*this.storageService.uploadImage(formData);*/
    }

    getImageUrl() {
        return null;
    }

    //Fixme : Need to fix image uploading
    /*selectFile($event: Event) {
        // @ts-ignore
        this.selectedFile = event.target.files[0];
    }*/

    async onPreviewPDF($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        let formData = Object.assign({}, this.addEditConsentForm.getRawValue());

        let valArray = [];
        this.additionalInformationArr.forEach((data => {
            valArray.push(data.value);
        }) )

        const docDefinition = {
            content: [
                {
                    text: 'Consent Form PDF',
                    fontSize: 18,
                    alignment: 'center',
                    color: '#000000'
                },
                {
                    image: await this.getBase64ImageFromURL(
                        this.imageSrc
                    ),
                    fit: [150, 150],
                    marginTop: 20
                },
                {
                    text: formData.title,
                    style: 'sectionHeader',
                    marginTop: 20
                },
                {
                    text: formData.content,
                },
                {
                    text: 'Additional Details',
                    style: 'sectionHeader'
                },
                {
                    ul: valArray,
                },
            ],
            footer: {
                columns: [
                    {text: this.pdfFooter, alignment: 'center'}
                ]
            },
            styles: {
                sectionHeader: {
                    bold: true,
                    decoration: 'underline',
                    fontSize: 14,
                    margin: [0, 15, 0, 15]
                }
            }
        };

        pdfMake.createPdf(docDefinition).open();
    }

    async onUploadPDF($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        let formData = Object.assign({}, this.addEditConsentForm.getRawValue());

        let valArray = [];
        this.additionalInformationArr.forEach((data => {
            valArray.push(data.value);
        }) )

        const docDefinition = {
            content: [
                {
                    text: 'Consent Form PDF',
                    fontSize: 18,
                    alignment: 'center',
                    color: '#000000'
                },
                {
                    image: await this.getBase64ImageFromURL(
                        this.imageSrc
                    ),
                    fit: [150, 150],
                    marginTop: 20
                },
                {
                    text: formData.title,
                    style: 'sectionHeader',
                    marginTop: 20
                },
                {
                    text: formData.content,
                },
                {
                    text: 'Additional Details',
                    style: 'sectionHeader'
                },
                {
                    ul: valArray,
                },
            ],
            footer: {
                columns: [
                    {text: this.pdfFooter, alignment: 'center'}
                ]
            },
            styles: {
                sectionHeader: {
                    bold: true,
                    decoration: 'underline',
                    fontSize: 14,
                    margin: [0, 15, 0, 15]
                }
            }
        };

        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getBase64((data) => {
            const request: any = new FormData();

            const byteCharacters = atob(data);

            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {type: 'pdf'});

            request.append('file', blob, 'test.pdf');

            this._commonService.uploadPDFFile(request).subscribe((result) => {
                if (result) {
                    if (result.status == "SUCCESS") {
                        this.toastr.success("PDF uploaded successfully!");
                    } else if (result.status == "FAILED") {
                        result.appsErrorMessages.forEach((s) => {
                            this.toastr.error(s.errorMessage);
                        });
                    } else {
                        this.toastr.error("Something went wrong");
                    }
                } else {
                    this.toastr.error("Something went wrong");
                }
            });
        });
    }

    getBase64ImageFromURL(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const dataURL = canvas.toDataURL('image/png');

                resolve(dataURL);
            };

            img.onerror = error => {
                reject(error);
            };

            img.src = url;
        });
    }

    onClickAdditionalInformationAdd($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        const dialogRef = this.dialog.open(AddAdditionalInfoComponent, {
            width: '70%',
            panelClass: 'custom-dialog-panel',
            data: {}
        });

        const dialogSubs = dialogRef.afterClosed()
            .subscribe((response) => {
                if (response) {
                    if (response.currentIdx == null) {
                        response.currentIdx = this.idxCount;
                        this.idxCount++;
                        this.additionalInformationArr.push(response);
                    }
                }
                dialogSubs.unsubscribe();
            });
    }

    onClickRemove($event: MouseEvent, number: number) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        this.additionalInformationArr = this.additionalInformationArr.filter(
            function (obj) {
                return obj.currentIdx != number;
            });
    }
}
