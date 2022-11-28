export class Employee {
    Id!: string | number;
    EmployeeName!: string;
    StarTimeUtc!: string;
    EndTimeUtc!: string;
    EntryNotes!: string;
    DeletedOn!: boolean;
}

export class EmployeeResult {
    employeeName: string;
    workinghours: number;

    constructor(employeeName: string, workinghours: number) {
        this.employeeName = employeeName;
        this.workinghours = workinghours
    }
}