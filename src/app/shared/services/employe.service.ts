import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  rawData: any[] = [
    { id: 'E01', name: 'viraj', course: 'designing', email: 'abc@gmail.com' },
    { id: 'E02', name: 'anand', course: 'development', email: 'def@gmail.com' },
    {
      id: 'E03',
      name: 'vihari',
      course: 'cyber security',
      email: 'ghi@gmail.com',
    },
  ];

  constructor() {}

  getEmployees() {
    return this.rawData;
  }

  addEmployee(emp:any){
this.rawData.push(emp);
  }

  removeEmployee(id:any){
return this.rawData=this.rawData.filter(emp=>emp.id != id) ;
  }

  getEmpoyeeById(id:any){
    return this.rawData.filter(emp=>emp.id === id) ;
  }

  editEmployee(emp:any){
    const empIndex= this.rawData.findIndex(x=>x.id==emp.id);
if(empIndex!=undefined&& emp.id!=undefined)
    this.rawData[empIndex]=emp;
  }

}
