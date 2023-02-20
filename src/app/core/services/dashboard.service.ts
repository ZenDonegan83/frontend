import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private api: ApiService) {}

  public getAll(): Observable<any[]> {
    return this.api.get(`customer/allCustomers`);
    // .pipe(map((res: { data }) => res.data));
  }

  public getById(depId): Observable<any> {
    return this.api.get(`customer/getDepartmentById?Id=${depId}`);
    // .pipe(map((res: { data }) => res.data));
  }
}
