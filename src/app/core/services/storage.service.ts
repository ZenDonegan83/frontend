import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable, Subject} from "rxjs";
import {ResponseDto} from "../models/responseDto";

import {SETTINGS} from "../../main/commons.settings";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";

const API_URL = `${environment.baseURL}`;

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    onUploadImage = new Subject();

    baseUrl: string = "/storage/";
    onImageUpload = new Subject();

    constructor(private api: ApiService,
                private httpClient: HttpClient) {
    }

    public loadImage(url: any): Observable<any> {
        return this.api.getImageData(this.baseUrl + `loadImage/` + url);
    }

    // public uploadImage(formData) {
    //     return this.api.uploadFile(this.baseUrl + `uploadImage`, formData, null);
    // }

    uploadImage(uploadRQ: any) {
        let response = this.httpClient.post('http://127.0.0.1:8080/api/storage/uploadImage', uploadRQ);
        response.subscribe((data: any) => {
            this.onUploadImage.next(data);
        });
    }
}
