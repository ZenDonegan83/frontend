import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { RegisterDto } from "../models/registerDto";
import { LoginDto } from "../models/loginDto";
import { ResponseDto } from "../models/responseDto";

@Injectable({
  providedIn: "root",
})
export class ArtistService {
  baseUrl: string = "/users/";
  constructor(private api: ApiService) {}

  public CreateOrUpdate(entity: any): Observable<ResponseDto> {
    // if (isNaN(entity.ID) || entity.ID == 0)
    return this.api.post<ResponseDto>(this.baseUrl + "sign-up", entity);
    // .pipe(map((res: { data }) => res.data));
    // else
    //     return this.http.Put(this.urlToApi + '/Update', entity).then(e => e);
  }

  public SignIn(entity: any): Observable<ResponseDto> {
    return this.api.post<ResponseDto>(this.baseUrl + "sign-in", entity);
    // .pipe(map((res: { data }) => res.data));
  }

  public getAll(): Observable<any[]> {
    return this.api
      .get(this.baseUrl + `getAll`)
      .pipe(map((res: { data }) => res.data));
  }

  public getById(id: any): Observable<any> {
    return this.api
      .get(this.baseUrl + `getById?Id=${id}`)
      .pipe(map((res: { data }) => res.data));
  }
}
