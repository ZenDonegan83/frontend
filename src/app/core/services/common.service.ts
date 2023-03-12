import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/responseDto";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private api: ApiService) {}

  public uploadFile(file: any): Observable<any> {
    return this.api.uploadFile<any>("/storage/uploadImage", file);
  }
  public getFile(file: any): Observable<any> {
    return this.api.getFile("/storage/loadImage/" + file);
  }

  public uploadPDFFile(file: any): Observable<any> {
    return this.api.uploadFile<any>("/storage/uploadPDF", file);
  }
}
