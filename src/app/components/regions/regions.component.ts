import { AfterViewInit, Component, Input, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { RegionService } from 'src/app/services/region.service';
import { Results } from 'src/app/models/data-interface';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit, OnDestroy {

  sticky = false;
  subs: Subscription[] = [];

  regions: Results;
  userList2: Results;

  regionNameList: any = [];
  regionIdList: any = [];

  employeeList: any = [];
  employeeDepartmentList: any = [];

  countriesInRegionList: any = [];




  constructor(private region: RegionService) {


    this.region.getRegionNames().subscribe(response =>{
      this.regionNameList = response;
      // console.log(this.countryNameList);
    })

    // this.region.getRegionId().subscribe(response =>{
    //   this.regionIdList = response;
    // })

    this.region.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
    })

    // this.region.getAllCountriesInRegion().subscribe(response =>{
    //   this.countriesInRegionList = response;
    // })

  }

  ngOnInit(): void {

    // var myModal = document.getElementById('myModal')
    //   var myInput = document.getElementById('myInput')

    //   myModal.addEventListener('shown.bs.modal', function () {
    //     myInput.focus()
    //   })
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  success: boolean = false;



  regionId: string;

  getRegionId(event: any){
    this.regionId = event.target.value;
    console.log("region id: " + this.regionId)
  }

  regionName: string;

  getRegionName(event: any){
    this.regionName = event.target.value;
    console.log("region name: " + this.regionName)
  }

  regionData: any = "";

      submitRegionData(){
        this.region.addRegion(this.regionName, this.regionId).subscribe(response=>{
          console.log(response);
          this.regionData = response;
        })
      }





  existingRegionName: string;

  getExistingRegionName(event: any){
    this.existingRegionName = event.target.value;
    console.log("existing region name: " + this.existingRegionName)
  }

  newRegionName: string;

  getNewRegionName(event: any){
    this.newRegionName = event.target.value;
    console.log("new region name: " + this.newRegionName)
  }

  newRegionId: string;

  getNewRegionId(event: any){
    this.newRegionId = event.target.value;
    console.log("new region id: " + this.newRegionId)
  }


  updatedRegionData: any = "";

      submitUpdatedRegionData(){
        this.region.updateRegion(this.existingRegionName, this.newRegionName, this.newRegionId).subscribe(response=>{
          console.log(response);
          this.updatedRegionData = response;
        })
      }



  deletedRegionData: any = "";

  submitRegionDataToDelete(){
        this.region.deleteRegion(this.regionName).subscribe(response=>{
          console.log(response);
          this.updatedRegionData = response;
        })
      }


  countriesInRegionData: any = "";

  submitRegionDataToDisplayCountries(){
    this.region.getAllCountriesInRegion(this.regionName).subscribe(response=>{
      // console.log(response);
      this.countriesInRegionData = response;
      console.log(this.countriesInRegionData);
    })
  }


  regionById: string;

  getRegionByIdMethod(event: any){
    this.regionById = event.target.value;
    console.log("region id: " + this.regionById)
  }

  regionByIdData: any = "";

  submitGetRegionById(){
    this.region.getRegionById(this.regionById).subscribe(response=>{
      // console.log(response);
      this.regionByIdData = response;
      console.log(this.regionByIdData);
    })
    this.success = true;
  }


}
