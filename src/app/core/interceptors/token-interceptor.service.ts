import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { commonUtil } from "app/core/utils/commonUtil";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers: any = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };

    if (commonUtil.isLoggedIn()) {
      headers.Authorization = `Bearer ${
        commonUtil.isLoggedIn() ? commonUtil.userSession.accessToken : ""
      }`;
    }
    req = req.clone({
      setHeaders: headers,
    });

    return next.handle(req);
  }
}
