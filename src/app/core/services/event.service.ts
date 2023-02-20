import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/responseDto";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class EventService {
  baseUrl: string = "/event/";
  constructor(private api: ApiService) {}

  public getAll(): Observable<ResponseDto> {
    return this.api.get(this.baseUrl + `allEvents`);
  }

  public getById(id: any): Observable<ResponseDto> {
    return this.api.get(this.baseUrl + `findByID?Id=${id}`);
  }
}
