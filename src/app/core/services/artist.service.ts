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
    if (isNaN(entity.artistID) || entity.artistID == 0)
      return this.api.postWithFile<ResponseDto>(
        this.baseUrl + "sign-up",
        entity
      );
    else
      return this.api.putWithFile<ResponseDto>(
        this.baseUrl + "updateUser/" + entity.artistID,
        entity
      );
  }

  public SignIn(entity: any): Observable<ResponseDto> {
    return this.api.post<ResponseDto>(this.baseUrl + "sign-in", entity);
    // .pipe(map((res: { data }) => res.data));
  }

  public getAll(): Observable<ResponseDto> {
    return this.api.get(this.baseUrl + `allUsers`);
  }

  public getById(id: any): Observable<any> {
    return this.api.get(this.baseUrl + `getById?Id=${id}`);
  }
}
