import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "./interface/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestService {
  private _url = "http://localhost:3333/careuser";
  constructor(private http: HttpClient) {}

  getAllEmployeeFromServer = (): Observable<IUser[]> => {
    return this.http.get<IUser[]>(this._url);
  };
}
