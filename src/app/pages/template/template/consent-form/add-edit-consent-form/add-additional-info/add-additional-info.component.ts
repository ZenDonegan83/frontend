import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-additional-info',
    templateUrl: './add-additional-info.component.html',
    styleUrls: ['./add-additional-info.component.scss']
})
export class AddAdditionalInfoComponent implements OnInit {

    addEditAdditionalInfoForm: FormGroup;
    currentIdx: any = null;

    constructor(public dialogRef: MatDialogRef<AddAdditionalInfoComponent>,
                private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    onCancelClick() {
        this.dialogRef.close(false);
    }

    initForm() {
        this.addEditAdditionalInfoForm = this.formBuilder.group({
            additionalInfo: ["", Validators.compose([
                Validators.required
            ])]
        });
    }

    isControlHasError(controlName: string, validationType: string): boolean {
        const control = this.addEditAdditionalInfoForm.controls[controlName];
        if (!control) {
            return false;
        }

        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }

    isValidForm() {
        return this.addEditAdditionalInfoForm.valid;
    }

    onAdd($event: MouseEvent) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }

        let formData = Object.assign({}, this.addEditAdditionalInfoForm.getRawValue());

        this.dialogRef.close({
            currentIdx: this.currentIdx,
            value: formData.additionalInfo
        });
    }
}
