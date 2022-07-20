import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeService } from '../shared/services/employe.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit , OnChanges{
public employee:any;
empList:any[]=[]
  constructor( private _emplService:EmployeeService, private empService: EmployeService  ) { }

  ngOnInit() {
    //this.employee=this._emplService.getEmployees();
    this.getAllEmp();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.getAllEmp();
  }

  getAllEmp(){
    this.empList=this.empService.getEmployees();
  }
  

  addEmp(){
    const emp:any= { id: 'E04', name: 'Vinay', course: 'Java', email: 'adsa@gmail.com' }
    this.empService.addEmployee(emp);
    console.log('list added::',this.empList);
  }

  deleteEmp(id:any){
    console.log(id);
   
      if(id=== this.eId){
        this.emp='';
      }
    this.empList=this.empService.removeEmployee(id);
    console.log('list delete::',this.empList);
    //this.getAllEmp();
   

  }
emp:any;
eId:any;
  viewEmp(id:any){
this.eId=id;
    this.emp=this.empService.getEmpoyeeById(id);
    console.log(this.emp);

  }

  

}
