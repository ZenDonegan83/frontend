import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";

const API_URL = `${environment.baseURL}`;

@Injectable({
  providedIn: "root",
})
export class HTTPInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger;
    const headers =
      (req.method === "POST" || req.method === "PUT") &&
      !req.headers.has("Content-Type") &&
      !req.headers.has("Ignore-Content-Type")
        ? req.headers.set("Content-Type", "application/json")
        : req.headers;
    req = req.clone({
      url: `${environment.PROTOCOL}://${API_URL}/${req.url}`,
      headers,
      setHeaders: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    return next.handle(req);
  }

  constructor() {}
}
