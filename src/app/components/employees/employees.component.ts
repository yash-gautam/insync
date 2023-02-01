import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Results } from 'src/app/models/data-interface';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];

  departments: Results;

  userList2: Results;

  employeeDepartmentIdList: any = [];
  employeeIdList: any = [];
  employeeNameList: any = [];
  employeeJobIdList: any = [];
  employeeManagerIdList: any = [];
  employeePhoneNumberList: any = [];
  employeeSalaryList: any = [];

  employeeList: any = [];

  employeeDepartmentList: any = [];


  constructor(private employee: EmployeeService) {

    this.employee.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
    })

    // this.employee.getEmployeeDepartmentId().subscribe(response =>{
    //   this.employeeDepartmentIdList = response;
    // })

    // this.employee.getEmployeeId().subscribe(response =>{
    //   this.employeeIdList = response;
    // })


    // this.employee.getEmployeeJobId().subscribe(response =>{
    //   this.employeeJobIdList = response;
    // })

    // this.employee.getEmployeeManagerId().subscribe(response =>{
    //   this.employeeManagerIdList = response;
    // })

    // this.employee.getEmployeePhoneNumber().subscribe(response =>{
    //   this.employeePhoneNumberList = response;
    // })

    // this.employee.getEmployeeSalary().subscribe(response =>{
    //   this.employeeSalaryList = response;
    // })






    // this.employee.getEmployeeName().subscribe(response =>{
    //   this.employeeNameList = response;
    //   // console.log(this.employeeNameList);
    // })


  }

  ngOnInit(): void {

    var myModal = document.getElementById('myModal')
      var myInput = document.getElementById('myInput')

      myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
      })
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  employeeId: string;

  getEmployeeId(event: any){
    this.employeeId = event.target.value;
    console.log("region id: " + this.employeeId)
  }

  firstName: string;

  getEmployeefirstName(event: any){
    this.firstName = event.target.value;
    console.log("region id: " + this.firstName)
  }

  lastName: string;

  getEmployeeLastName(event: any){
    this.lastName = event.target.value;
    console.log("region id: " + this.lastName)
  }

  phoneNumber: string;

  getEmployeePhoneNumber(event: any){
    this.phoneNumber = event.target.value;
    console.log("region id: " + this.phoneNumber)
  }

  employeeJobId: string;

  getEmployeeJobId(event: any){
    this.employeeJobId = event.target.value;
    console.log("region id: " + this.employeeJobId)
  }

  employeeSalary: string;

  getEmployeeSalary(event: any){
    this.employeeSalary = event.target.value;
    console.log("region id: " + this.employeeSalary)
  }

  employeeManagerId: string;

  getEmployeeManagerId(event: any){
    this.employeeManagerId = event.target.value;
    console.log("region id: " + this.employeeManagerId)
  }

  employeeDepartmentId: string;

  getEmployeeDepartmentId(event: any){
    this.employeeDepartmentId = event.target.value;
    console.log("region id: " + this.employeeDepartmentId)
  }

  employeeData: any = "";

      submitEmployeeData(){
        this.employee.addEmployee(this.employeeId, this.firstName, this.lastName, this.phoneNumber, this.employeeJobId, this.employeeSalary, this.employeeManagerId, this.employeeDepartmentId).subscribe(response=>{
          console.log(response);
          this.employeeData = response;
        })
      }



  existingEmployeeId: string;

  getExistingEmployeeId(event: any){
    this.existingEmployeeId = event.target.value;
    console.log("existing region name: " + this.existingEmployeeId)
  }

  newEmployeeId: string;

  getNewEmployeeId(event: any){
    this.newEmployeeId = event.target.value;
    console.log("existing region name: " + this.newEmployeeId)
  }

  newFirstName: string;

  getNewFirstName(event: any){
    this.newFirstName = event.target.value;
    console.log("existing region name: " + this.newFirstName)
  }

  newLastName: string;

  getNewLastName(event: any){
    this.newLastName = event.target.value;
    console.log("existing region name: " + this.newLastName)
  }

  newEmployeePhoneNumber: string;

  getNewEmployeePhoneNumber(event: any){
    this.newEmployeePhoneNumber = event.target.value;
    console.log("existing region name: " + this.newEmployeePhoneNumber)
  }

  newEmployeeJobId: string;

  getNewEmployeeJobId(event: any){
    this.newEmployeeJobId = event.target.value;
    console.log("existing region name: " + this.newEmployeeJobId)
  }

  newEmployeeSalary: string;

  getNewEmployeeSalary(event: any){
    this.newEmployeeSalary = event.target.value;
    console.log("existing region name: " + this.newEmployeeSalary)
  }

  newEmployeeManagerId: string;

  getNewEmployeeManagerId(event: any){
    this.newEmployeeManagerId = event.target.value;
    console.log("existing region name: " + this.newEmployeeManagerId)
  }

  newEmployeeDepartmentId: string;

  getNewEmployeeDepartmentId(event: any){
    this.newEmployeeDepartmentId = event.target.value;
    console.log("existing region name: " + this.newEmployeeDepartmentId)
  }

  updatedEmployeeData: any = "";

      submitUpdatedEmployeeData(){
        this.employee.updateEmployee(this.existingEmployeeId, this.newEmployeeId, this.newFirstName, this.newLastName, this.newEmployeePhoneNumber, this.newEmployeeJobId, this.newEmployeeSalary, this.newEmployeeManagerId, this.newEmployeeDepartmentId).subscribe(response=>{
          console.log(response);
          this.updatedEmployeeData = response;
        })
      }

  deletedEmployeeData: any = "";

  submitEmployeeDataToDelete(){
        this.employee.deleteEmployee(this.firstName, this.lastName).subscribe(response=>{
          console.log(response);
          this.deletedEmployeeData = response;
        })
      }



  jobHistoriesInEmployeesData: any = "";

  submitEmployeeDataToDisplayJobHistories(){
    this.employee.getAllJobHistoryOfEmployee(this.firstName, this.lastName).subscribe(response=>{
      // console.log(response);
      this.jobHistoriesInEmployeesData = response;
      console.log(this.jobHistoriesInEmployeesData);
    })
  }

  employeeById: string;

  getEmployeeByIdMethod(event: any){
    this.employeeById = event.target.value;
    console.log("location id: " + this.employeeById)
  }

  employeeByIdData: any = "";

  submitGetEmployeeById(){
    this.employee.getEmployeeById(this.employeeById).subscribe(response=>{
      // console.log(response);
      this.employeeByIdData = response;
      console.log(this.employeeByIdData);
    })
  }


}
