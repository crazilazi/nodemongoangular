import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/user';
import { Chance } from 'chance';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  empData: IUser[] = [];
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    // this.empData = this._employeeServices.getAllEmployee();
    this._employeeServices.getAllEmployeeFromServer().subscribe(data => {
      this.empData = data;
      console.log(this.empData);
    });
  }

}
