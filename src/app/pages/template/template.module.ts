import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateComponent} from './template/template.component';
import {TemplateRoutingModule} from "./template-routing.module";
import {
    AddEditConsentFormComponent
} from './template/consent-form/add-edit-consent-form/add-edit-consent-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ConsentFormImageUploadSectionComponent } from './template/consent-form/add-edit-consent-form/consent-form-image-cropper-component/consent-form-image-upload-section/consent-form-image-upload-section.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {MatButtonModule} from "@angular/material/button";
import { ConsentFormImageCropperComponentComponent } from './template/consent-form/add-edit-consent-form/consent-form-image-cropper-component/consent-form-image-cropper-component.component';
import {MatIconModule} from "@angular/material/icon";
import { AddAdditionalInfoComponent } from './template/consent-form/add-edit-consent-form/add-additional-info/add-additional-info.component';

@NgModule({
    declarations: [
        TemplateComponent,
        AddEditConsentFormComponent,
        ConsentFormImageUploadSectionComponent,
        ConsentFormImageCropperComponentComponent,
        AddAdditionalInfoComponent
    ],
    imports: [
        CommonModule,
        TemplateRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ImageCropperModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class TemplateModule {
}
