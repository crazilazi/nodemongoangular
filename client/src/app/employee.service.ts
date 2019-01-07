import { Injectable } from '@angular/core';
import { IUser } from './interface/user';
import { Chance } from 'chance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = 'http://localhost:3333/careuser';
  constructor(private http: HttpClient) { }

  getAllEmployee = () => {
    const empData: IUser[] = [];
    for (let i = 0; i < 50; i++) {
      const chance = new Chance();
      const user: IUser = {
        firstName: chance.first(),
        lastName: chance.last(),
        age: chance.age({ type: 'teen' }),
        email: '',
      };
      user.email = `${user.firstName}.${user.lastName.split(' ')[0]}@linda.uk`;
      empData.push(user);
    }
    return empData;
  }

  getAllEmployeeFromServer = (): Observable<IUser[]> => {

    return this.http.get<IUser[]>(this._url);
  }
}
