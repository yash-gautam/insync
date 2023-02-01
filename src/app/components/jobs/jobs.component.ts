import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { JobService } from 'src/app/services/jobs/job.service';
import { Results } from 'src/app/models/data-interface';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];

  departments: Results;

  userList2: Results;

  jobDetailsList: any =[];
  jobTitleList: any = [];
  jobIdList: any = [];
  jobMaxSalaryList: any = [];
  jobMinSalaryList: any = [];

  employeeList: any = [];

  employeeNameList: any = [];
  employeeDepartmentList: any = [];



  constructor(private job: JobService) {

    this.job.getJobDetails().subscribe(response =>{
      this.jobDetailsList = response;
      // console.log(this.countryNameList);
    })

    this.job.getJobTitles().subscribe(response =>{
      this.jobTitleList = response;
      // console.log(this.countryNameList);
    })

    this.job.getJobId().subscribe(response =>{
      this.jobIdList = response;
      // console.log(this.countryNameList);
    })

    this.job.getJobMaxSalary().subscribe(response =>{
      this.jobMaxSalaryList = response;
      // console.log(this.countryNameList);
    })

    this.job.getJobMinSalary().subscribe(response =>{
      this.jobMinSalaryList = response;
      // console.log(this.countryNameList);
    })



    this.job.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
      // console.log(this.employeeList);
    })

    this.job.getEmployeeName().subscribe(response =>{
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

  jobId: string;

  getJobId(event: any){
    this.jobId = event.target.value;
    console.log("region id: " + this.jobId)
  }

  jobTitle: string;

  getJobTitle(event: any){
    this.jobTitle = event.target.value;
    console.log("region id: " + this.jobTitle)
  }

  jobMaxSalary: string;

  getJobMaxSalary(event: any){
    this.jobMaxSalary = event.target.value;
    console.log("region id: " + this.jobMaxSalary)
  }

  jobMinSalary: string;

  getJobMinSalary(event: any){
    this.jobMinSalary = event.target.value;
    console.log("region id: " + this.jobMinSalary)
  }

  jobDepartmentId: string;

  getJobDepartmentId(event: any){
    this.jobDepartmentId = event.target.value;
    console.log("region id: " + this.jobDepartmentId)
  }

  jobData: any = "";

      submitJobData(){
        this.job.addJob(this.jobId, this.jobTitle, this.jobMinSalary, this.jobMaxSalary, this.jobDepartmentId).subscribe(response=>{
          console.log(response);
          this.jobData = response;
        })
      }


  existingJobTitle: string;

  getExistingJobTitle(event: any){
    this.existingJobTitle = event.target.value;
    console.log("existing region name: " + this.existingJobTitle)
  }

  newJobId: string;

  getNewJobId(event: any){
    this.newJobId = event.target.value;
    console.log("existing region name: " + this.newJobId)
  }

  newJobTitle: string;

  getNewJobTitle(event: any){
    this.newJobTitle = event.target.value;
    console.log("existing region name: " + this.newJobTitle)
  }

  newJobMinSalary: string;

  getNewJobMinSalary(event: any){
    this.newJobMinSalary = event.target.value;
    console.log("existing region name: " + this.newJobMinSalary)
  }

  newJobMaxSalary: string;

  getNewJobMaxSalary(event: any){
    this.newJobMaxSalary = event.target.value;
    console.log("existing region name: " + this.newJobMaxSalary)
  }

  updatedJobData: any = "";

      submitUpdatedJobData(){
        this.job.updateJob(this.existingJobTitle, this.newJobId, this.newJobTitle, this.newJobMinSalary, this.newJobMaxSalary).subscribe(response=>{
          console.log(response);
          this.updatedJobData = response;
        })
      }

  deletedJobData: any = "";

  submitJobDataToDelete(){
        this.job.deleteJob(this.jobTitle).subscribe(response=>{
          console.log(response);
          this.deletedJobData = response;
        })
      }


  employeesinJobData: any = "";

  submitJobDataToDisplayEmployees(){
    this.job.getAllEmployeesInJob(this.jobTitle).subscribe(response=>{
      // console.log(response);
      this.employeesinJobData = response;
      console.log(this.employeesinJobData);
    })
  }

  jobById: string;

  getJobByIdMethod(event: any){
    this.jobById = event.target.value;
    console.log("location id: " + this.jobById)
  }

  jobByIdData: any = "";

  submitGetJobById(){
    this.job.getJobById(this.jobById).subscribe(response=>{
      // console.log(response);
      this.jobByIdData = response;
      console.log(this.jobByIdData);
    })
  }

}
