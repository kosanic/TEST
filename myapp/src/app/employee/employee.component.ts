import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeResult } from '../models/employee-model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private employees: Employee[] | undefined;
  public employeeResult: EmployeeResult[] = [];

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees() {
    return this.service.getEmpList().subscribe({
      next: (data: Employee[]) => this.employees = data,
      error: (e) => console.error(e),
      complete: () => this.mapEmployees()
    })
  }

  private mapEmployees() {
    const dictionary = new Map<string, number>();

    this.employees!.forEach((employee) => {
      const diff = this.getDifferenceInSeconds(new Date(employee.EndTimeUtc), new Date(employee.StarTimeUtc));
      var temp: undefined | number = dictionary.get(employee.EmployeeName);

      if (temp) {
        dictionary.set(employee.EmployeeName, temp + diff);
      } else {
        dictionary.set(employee.EmployeeName, diff)
      }
    });

    var temp: EmployeeResult[] = [];

    dictionary.forEach((value, key) => {
      temp.push(new EmployeeResult(key, Math.ceil(value / 3600)))
    });

    temp.sort((first, second) => first.workinghours < second.workinghours ? 1 : -1);

    this.employeeResult = temp;
  }

  private getDifferenceInSeconds(endTimeUtc: Date, starTimeUtc: Date) {
    let diffInMs: number = endTimeUtc.getTime() - starTimeUtc.getTime();
    return diffInMs / 1000;
  }

  
}
