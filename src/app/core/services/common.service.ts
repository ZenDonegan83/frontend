import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/responseDto";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private api: ApiService) {}

  public uploadFile(file: any): Observable<ResponseDto> {
    return this.api.post<ResponseDto>("/storage/uploadImage", file);
  }
}
