import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { JobHistoryService } from 'src/app/services/jobHistories/job-history.service';
import { Results } from 'src/app/models/data-interface';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  sticky = false;
  subs: Subscription[] = [];

  departments: Results;

  userList2: Results;

  jobHistoryDetailsList: any =[];
  jobHistoryDepartmentIdList: any = [];
  jobHistoryEmployeeIdList: any = [];
  jobHistoryJobIdList: any = [];
  jobHistoryStartDateList: any = [];
  jobHistoryEndDateList: any = [];


  employeeList: any = [];

  employeeNameList: any = [];
  employeeDepartmentList: any = [];


  constructor(private jobHistory: JobHistoryService) {

    this.jobHistory.getJobHistoryDetails().subscribe(response =>{
      this.jobHistoryDetailsList = response;
      // console.log(this.countryNameList);
    })

    this.jobHistory.getJobHistoryDepartmentId().subscribe(response =>{
      this.jobHistoryDepartmentIdList = response;
      // console.log(this.countryNameList);
    })

    this.jobHistory.getJobHistoryEmployeeId().subscribe(response =>{
      this.jobHistoryEmployeeIdList = response;
      // console.log(this.countryNameList);
    })

    this.jobHistory.getJobHistoryJobId().subscribe(response =>{
      this.jobHistoryJobIdList = response;
      // console.log(this.countryNameList);
    })

    this.jobHistory.getJobHistoryStartDate().subscribe(response =>{
      this.jobHistoryStartDateList = response;
      // console.log(this.countryNameList);
    })

    this.jobHistory.getJobHistoryEndDate().subscribe(response =>{
      this.jobHistoryEndDateList = response;
      // console.log(this.countryNameList);
    })



    this.jobHistory.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
      // console.log(this.employeeList);
    })

    // this.jobHistory.getEmployeeName().subscribe(response =>{
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


  departmentId: string;

  getJobHistoryDepartmentId(event: any){
    this.departmentId = event.target.value;
    console.log("region id: " + this.departmentId)
  }

  employeeId: string;

  getJobHistoryEmployeeId(event: any){
    this.employeeId = event.target.value;
    console.log("region id: " + this.employeeId)
  }

  jobId: string;

  getJobHistoryJobId(event: any){
    this.jobId = event.target.value;
    console.log("region id: " + this.jobId)
  }

  startDate: Date;

  getJobHistoryStartDate(event: any){
    this.startDate = event.target.value;
    console.log("region id: " + this.startDate)
  }

  endDate: Date;

  getJobHistoryEndDate(event: any){
    this.endDate = event.target.value;
    console.log("region id: " + this.endDate)
  }

  jobHistoryData: any = "";

      submitJobHistoryData(){
        this.jobHistory.addJobHistory(this.employeeId, this.startDate, this.endDate, this.jobId, this.departmentId).subscribe(response=>{
          console.log(response);
          this.jobHistoryData = response;
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

  newStartDate: string;

  getNewStartDate(event: any){
    this.newStartDate = event.target.value;
    console.log("existing region name: " + this.newStartDate)
  }

  newEndDate: string;

  getNewEndDate(event: any){
    this.newEndDate = event.target.value;
    console.log("existing region name: " + this.newEndDate)
  }

  newJobId: string;

  getNewJobId(event: any){
    this.newJobId = event.target.value;
    console.log("existing region name: " + this.newJobId)
  }

  newDepartmentId: string;

  getNewDepartmentId(event: any){
    this.newDepartmentId = event.target.value;
    console.log("existing region name: " + this.newDepartmentId)
  }

  updatedJobHistoryData: any = "";

      submitUpdatedJobHistoryData(){
        this.jobHistory.updateJobHistory(this.existingEmployeeId, this.newEmployeeId, this.newStartDate, this.newEndDate, this.newJobId, this.newDepartmentId).subscribe(response=>{
          console.log(response);
          this.updatedJobHistoryData = response;
        })
      }

  deletedJobHistoryData: any = "";

  submitJobHistoryDataToDelete(){
        this.jobHistory.deleteJobHistory(this.employeeId).subscribe(response=>{
          console.log(response);
          this.deletedJobHistoryData = response;
        })
      }



  jobHistoryById: string;

  getJobHistoryByIdMethod(event: any){
    this.jobHistoryById = event.target.value;
    console.log("location id: " + this.jobHistoryById)
  }

  jobHistoryByIdData: any = "";

  submitGetJobHistoryById(){
    this.jobHistory.getJobHistoryById(this.jobHistoryById).subscribe(response=>{
      // console.log(response);
      this.jobHistoryByIdData = response;
      console.log(this.jobHistoryByIdData);
    })
  }

}
