import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:any;

  constructor( private _emplService:EmployeeService) { }

  ngOnInit(){
    //this.employee=this._emplService.getEmployees();
  }

}
