import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { RegisterDto } from "../models/registerDto";
import { LoginDto } from "./../models/loginDto";
import { ResponseDto } from "./../models/responseDto";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  baseUrl: string = "/users/";
  constructor(private api: ApiService) {}

  public checkIfUserNameExists(value: string): Observable<any> {
    return this.api
      .get(`${this.baseUrl}checkIfUsernameExists`, {})
      .pipe(map((res: { data }) => res.data));
  }
  public checkIfEmailExists(value: string): Observable<any> {
    return this.api
      .get(`${this.baseUrl}checkIfEmailExists`, {})
      .pipe(map((res: { data }) => res.data));
  }

  public Register(entity: RegisterDto): Observable<ResponseDto> {
    // if (isNaN(entity.ID) || entity.ID == 0)
    return this.api.post<ResponseDto>(this.baseUrl + "sign-up", entity);
    // .pipe(map((res: { data }) => res.data));
    // else
    //     return this.http.Put(this.urlToApi + '/Update', entity).then(e => e);
  }

  public SignIn(entity: LoginDto): Observable<ResponseDto> {
    return this.api.post<ResponseDto>(this.baseUrl + "sign-in", entity);
    // .pipe(map((res: { data }) => res.data));
  }
}
