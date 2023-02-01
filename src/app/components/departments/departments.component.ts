import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/services/departments/department.service';
import { Results } from 'src/app/models/data-interface';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];

  departments: Results;

  userList2: Results;

  departmentDetailsList: any = [];
  departmentIdList: any = [];
  departmentLocationIdList: any = [];
  departmentManagerIdList: any = [];

  employeeList: any = [];

  employeeNameList: any = [];
  employeeDepartmentList: any = [];



  constructor(private department: DepartmentService) {

    this.department.getDepartmentDetails().subscribe(response =>{
      this.departmentDetailsList = response;
      // console.log(this.countryNameList);
    })

    this.department.getDepartmentId().subscribe(response =>{
      this.departmentIdList = response;
      // console.log(this.countryNameList);
    })

    this.department.getDepartmentLocationId().subscribe(response =>{
      this.departmentLocationIdList = response;
      // console.log(this.countryNameList);
    })

    this.department.getDepartmentManagerId().subscribe(response =>{
      this.departmentManagerIdList = response;
      // console.log(this.countryNameList);
    })



    this.department.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
      // console.log(this.employeeList);
    })

    this.department.getEmployeeName().subscribe(response =>{
      this.employeeNameList = response;
      // console.log(this.employeeNameList);
    })


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

  departmentId: string;

  getDepartmentId(event: any){
    this.departmentId = event.target.value;
    console.log("region id: " + this.departmentId)
  }

  departmentName: string;

  getDepartmentName(event: any){
    this.departmentName = event.target.value;
    console.log("region id: " + this.departmentName)
  }

  managerId: string;

  getManagerId(event: any){
    this.managerId = event.target.value;
    console.log("region id: " + this.managerId)
  }

  locationId: string;

  getLocationId(event: any){
    this.locationId = event.target.value;
    console.log("region id: " + this.locationId)
  }


  departmentData: any = "";

      submitDepartmentData(){
        this.department.addDepartment(this.departmentId, this.departmentName, this.managerId, this.locationId).subscribe(response=>{
          console.log(response);
          this.departmentData = response;
        })
      }



  existingDepartmentName: string;

  getExistingDepartmentName(event: any){
    this.existingDepartmentName = event.target.value;
    console.log("existing region name: " + this.existingDepartmentName)
  }

  newDepartmentId: string;

  getNewDepartmentId(event: any){
    this.newDepartmentId = event.target.value;
    console.log("existing region name: " + this.newDepartmentId)
  }

  newDepartmentName: string;

  getNewDepartmentName(event: any){
    this.newDepartmentName = event.target.value;
    console.log("existing region name: " + this.newDepartmentName)
  }

  newManagerId: string;

  getNewManagerId(event: any){
    this.newManagerId = event.target.value;
    console.log("existing region name: " + this.newManagerId)
  }

  newLocationId: string;

  getNewLocationId(event: any){
    this.newLocationId = event.target.value;
    console.log("existing region name: " + this.newLocationId)
  }

  updatedDepartmentData: any = "";

      submitUpdatedDepartmentData(){
        this.department.updateDepartment(this.existingDepartmentName, this.newDepartmentId, this.newDepartmentName, this.newManagerId, this.newLocationId).subscribe(response=>{
          console.log(response);
          this.updatedDepartmentData = response;
        })
      }

  deletedDepartmentData: any = "";

  submitDepartmentDataToDelete(){
        this.department.deleteDepartment(this.departmentName).subscribe(response=>{
          console.log(response);
          this.deletedDepartmentData = response;
        })
      }


  jobsInDepartmentData: any = "";

  submitDepartmentDataToDisplayJobs(){
    this.department.getAllJobsInDepartment(this.departmentName).subscribe(response=>{
      // console.log(response);
      this.jobsInDepartmentData = response;
      console.log(this.jobsInDepartmentData);
    })
  }

  departmentById: string;

  getDepartmentByIdMethod(event: any){
    this.departmentById = event.target.value;
    console.log("location id: " + this.departmentById)
  }

  departmentByIdData: any = "";

  submitGetDepartmentById(){
    this.department.getDepartmentById(this.departmentById).subscribe(response=>{
      // console.log(response);
      this.departmentByIdData = response;
      console.log(this.departmentByIdData);
    })
  }



}
