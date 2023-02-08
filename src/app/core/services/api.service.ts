import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "environments/environment";
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
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: any = {}): Observable<any> {
    let headers = this.httpOptions.headers;
    const queryParams = this.prepareParams(params);
    return this.http
      .get(`${API_URL}${path}${queryParams}`, { headers })
      .pipe(catchError(this.formatErrors));
  }

  // put(path: string, body: Object = {}, options: any = null): Observable<any> {
  //   return this.http
  //     .put(`${path}`, JSON.stringify(body), options ?? new HttpHeaders())
  //     .pipe(catchError(this.formatErrors));
  // }

  // post(path: string, body: Object = {}, options: any = null): Observable<any> {
  //   if (options === null) {
  //     options = this.httpOptions;
  //   }
  //   return this.http
  //     .post(`${path}`, JSON.stringify(body), options)
  //     .pipe(catchError(this.formatErrors));
  // }

  public post<T>(url, body): Observable<T> {
    let headers = this.httpOptions.headers;
    return this.http
      .post<T>(API_URL + url, body, { headers })
      .pipe(catchError(this.formatErrors));
  }

  public put<T>(url, requestBody): Observable<T> {
    let headers = new HttpHeaders();
    return this.http
      .put<T>(API_URL + url, requestBody, { headers })
      .pipe(catchError(this.formatErrors));
  }

  delete(path: any, options: any = null): Observable<any> {
    return this.http
      .delete(`${path}`, options ?? new HttpHeaders())
      .pipe(catchError(this.formatErrors));
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
