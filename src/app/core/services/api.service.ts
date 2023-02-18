import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "environments/environment";
import { ToastrService } from "ngx-toastr";
import { ResponseDto } from "./../models/responseDto";
import { commonUtil } from "app/core/utils/commonUtil";
const API_URL = `${environment.baseURL}`;
@Injectable({
  providedIn: "root",
})
export class ApiService {
  public selectedAppDate: any;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "*/*",
    }),
  };
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private formatErrors(error: any) {
    debugger;
    if (error.error) {
      let result: ResponseDto = error.error;
      if (result.status == "FAILED") {
        result.appsErrorMessages.forEach((s) => {
          this.toastr.error(s.errorMessage);
        });
      } else {
        this.toastr.error("Someting went wrong, please contact administrator.");
      }
    } else {
      // this.toastr.error("Someting went wrong, please contact administrator.");
    }

    return throwError(error.error);
  }

  get(path: string, params: any = {}): Observable<any> {
    let headers = this.httpOptions.headers;
    const queryParams = this.prepareParams(params);
    return this.http
      .get(`${API_URL}${path}${queryParams}`)
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  // put(path: string, body: Object = {}, options: any = null): Observable<any> {
  //   return this.http
  //     .put(`${path}`, JSON.stringify(body), options ?? new HttpHeaders())
  //     .pipe(catchError(err=>this.formatErrors(err,this.toastr)));
  // }

  // public post<T>(
  //   path: string,
  //   body: Object = {},
  //   options: any = null
  // ): Observable<T> {
  //   if (options === null) {
  //     options = this.httpOptions;
  //   }
  //   debugger;
  //   return this.http
  //     .post<T>(API_URL + `${path}`, JSON.stringify(body), options)
  //     .pipe(catchError(err=>this.formatErrors(err,this.toastr)));
  // }

  public post<T>(url, body, headers: any = null): Observable<T> {
    if (headers === null) {
      headers = new HttpHeaders();
    }
    return this.http
      .post<T>(API_URL + url, body)
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  public postWithFile<T>(url, body, headers: any = null): Observable<T> {
    if (headers === null) {
      headers = new HttpHeaders();
    }
    return this.http
      .post<T>(API_URL + url, body, {
        reportProgress: true,
        responseType: "json",
      })
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  public put<T>(url, body, headers: any = null): Observable<T> {
    if (headers === null) {
      headers = new HttpHeaders();
    }
    return this.http
      .put<T>(API_URL + url, body)
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  public putWithFile<T>(url, body, headers: any = null): Observable<T> {
    if (headers === null) {
      headers = new HttpHeaders();
    }
    return this.http
      .put<T>(API_URL + url, body, {
        reportProgress: true,
        responseType: "json",
      })
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  public uploadFile<T>(url, body, headers: any = null): Observable<T> {
    if (headers === null) {
      headers = new HttpHeaders();
    }
    return this.http
      .post<T>(API_URL + url, body, {
        reportProgress: true,
        responseType: "json",
      })
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  // http://localhost:8080/api/storage/uploadImage
  delete(path: any, options: any = null): Observable<any> {
    return this.http
      .delete(`${path}`, options ?? new HttpHeaders())
      .pipe(catchError((err) => this.formatErrors(err)));
  }

  // public delete<T>(url, id: number | string): Observable<any> {
  //   let headers = new HttpHeaders();
  //   return this.httpClient.delete(`${url}`, { headers });
  // }

  private prepareParams(params): string {
    let queryParams = "";

    if (params) {
      queryParams = "?";
      for (const [key, value] of Object.entries(params)) {
        if (queryParams !== "?") {
          queryParams = queryParams + "&";
        }
        if (Array.isArray(value)) {
          value.forEach((v) => {
            queryParams = queryParams + `${key}=${v}&`;
          });
          if (queryParams.endsWith("&")) {
            queryParams = queryParams.slice(0, -1);
          }
        } else {
          queryParams = queryParams + `${key}=${value}`;
        }
      }
    }
    return queryParams;
  }
}
