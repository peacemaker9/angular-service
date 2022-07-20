import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(){
    return[
      {"id":"E01", "name":"viraj", "course":"designing" ,"email":"abc@gmail.com"},
      {"id":"E02", "name":"anand", "course":"development" ,"email":"def@gmail.com"},
      {"id":"E03", "name":"vihari", "course":"cyber security" ,"email":"ghi@gmail.com"}    ]
  }

  constructor() { }
}
