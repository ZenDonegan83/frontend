import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiService } from "./api.service";
import { RegisterDto } from "../models/registerDto";
import { LoginDto } from "../models/loginDto";
import { ResponseDto } from "../models/responseDto";
import { CustomerDTO } from "./../models/customerDto";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  baseUrl: string = "/customer/";
  constructor(private api: ApiService) {}

  public CreateOrUpdate(entity: CustomerDTO): Observable<ResponseDto> {
    if (isNaN(entity.customerID) || entity.customerID == 0)
      return this.api.postWithFile<ResponseDto>(
        this.baseUrl + "saveCustomer",
        entity
      );
    else
      return this.api.putWithFile<ResponseDto>(
        this.baseUrl + "updateCustomer/" + entity.customerID,
        entity
      );
  }

  public getAll(): Observable<ResponseDto> {
    return this.api.get(this.baseUrl + `allCustomers`);
  }

  public getById(id: any): Observable<any> {
    return this.api.get(this.baseUrl + `findByID/${id}`);
  }
  public delete(id: any): Observable<any> {
    return this.api.delete(this.baseUrl + `delete/${id}`);
  }
}
