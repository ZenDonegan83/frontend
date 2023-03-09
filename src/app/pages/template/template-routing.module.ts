import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template/template.component";
import {
    AddEditConsentFormComponent
} from "./template/consent-form/add-edit-consent-form/add-edit-consent-form.component";

const routes: Routes = [
    {
        path: 'template',
        component: TemplateComponent
    },
    {
        path: 'template/consent-form',
        component: AddEditConsentFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateRoutingModule {
}
