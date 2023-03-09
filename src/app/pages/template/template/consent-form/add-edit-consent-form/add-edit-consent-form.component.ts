import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslationService} from "../../../../../core/services/transalation.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {from} from "rxjs";
import {StorageService} from "../../../../../core/services/storage.service";

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
    isItemTwoChecked: string = 'N';
    isItemThreeChecked: string = 'N';
    isItemFourChecked: string = 'N'
    isItemFiveChecked: string = 'N'

    constructor(private formBuilder: FormBuilder,
                private translationService: TranslationService,
                private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.initUserForm();

        this.translationService.language.subscribe((res: any) => {
            this.selectedLanguage = res;
            this.translationService.get().subscribe((data: any) => {
                this.translation = data.add_edit_consent_form;
            });
        });
    }

    initUserForm() {
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
            case 'ITEM_TWO':
                $event.checked ? this.isItemTwoChecked = 'Y' : this.isItemTwoChecked = 'N';
                break;
            case 'ITEM_THREE':
                $event.checked ? this.isItemThreeChecked = 'Y' : this.isItemThreeChecked = 'N';
                break;
            case 'ITEM_FOUR':
                $event.checked ? this.isItemFourChecked = 'Y' : this.isItemFourChecked = 'N';
                break;
            case 'ITEM_FIVE':
                $event.checked ? this.isItemFiveChecked = 'Y' : this.isItemFiveChecked = 'N';
                break;
        }
    }

    onSave($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        let submitData = Object.assign({}, this.addEditConsentForm.getRawValue());
        submitData.isItemOneChecked = this.isItemOneChecked;
        submitData.isItemTwoChecked = this.isItemTwoChecked;
        submitData.isItemThreeChecked = this.isItemThreeChecked;
        submitData.isItemFourChecked = this.isItemFourChecked;
        submitData.isItemFiveChecked = this.isItemFiveChecked;

        console.log(submitData);

        //Fixme : Need to fix image uploading
/*        const formData: any = new FormData();
        formData.append("file", this.selectedFile);
        this.storageService.uploadPDF(formData);*/
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
}
