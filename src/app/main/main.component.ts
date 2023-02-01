import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Results } from '../models/data-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];

  regions: Results;
  // popular: Movies;
  // topRated: Movies ;
  // originals: Movies;
  // nowPlaying: Movies;
  userList2: Results;

  countryNameList: any = [];
  countryIdList: any = [];
  regionIdForCountryList: any = [];

  employeeList: any = [];

  employeeNameList: any = [];
  employeeDepartmentList: any = [];



  constructor(private country: DataService) {
    this.country.getAllCountries().subscribe(response =>{
      this.countryNameList = response;
      // console.log(this.countryNameList);
    })

    this.country.getCountryId().subscribe(response =>{
      this.countryIdList = response;
      // console.log(this.countryIdList);
    })

    this.country.getRegionIdForCountry().subscribe(response =>{
      this.regionIdForCountryList = response;
      // console.log(this.regionIdForCountryList);
    })

    this.country.getEmployeeName().subscribe(response =>{
      this.employeeNameList = response;
      // console.log(this.employeeNameList);
    })

    this.country.getEmployeeDepartment("Den").subscribe(response =>{
      this.employeeDepartmentList = response;
      // console.log(this.employeeDepartmentList);
    })

    this.country.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
      // console.log(this.employeeList);
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
      userResponse1: any = []
      userResponse: any = [this.userResponse1 = []];






      regionId: string;

      getRegionId(event: any){
        this.regionId = event.target.value;
        console.log("country id: " + this.regionId)
      }

      countryName: string;

      getCountryName(event: any){
        this.countryName = event.target.value;
        console.log("country name: " + this.countryName)
      }

      countryId: string;

      getCountryId(event: any){
        this.countryId = event.target.value;
        console.log("country id: " + this.countryId)
      }

      countryData: any = "";

      submitCountryData(){
        this.country.addCountry(this.regionId, this.countryName, this.countryId).subscribe(response=>{
          console.log(response);
          this.countryData = response;
        })
      }

  existingCountryName: string;

  getExistingCountryName(event: any){
    this.existingCountryName = event.target.value;
    console.log("existing region name: " + this.existingCountryName)
  }

  newRegionId: string;

  getNewRegionId(event: any){
    this.newRegionId = event.target.value;
    console.log("existing region name: " + this.newRegionId)
  }

  newCountryId: string;

  getNewCountryId(event: any){
    this.newCountryId = event.target.value;
    console.log("existing region name: " + this.newCountryId)
  }

  newCountryName: string;

  getNewCountryName(event: any){
    this.newCountryName = event.target.value;
    console.log("existing region name: " + this.newCountryName)
  }


  updatedCountryData: any = "";

      submitUpdatedCountryData(){
        this.country.updateCountry(this.existingCountryName, this.newRegionId, this.newCountryId, this.newCountryName).subscribe(response=>{
          console.log(response);
          this.updatedCountryData = response;
        })
      }

  deletedCountryData: any = "";

  submitCountryDataToDelete(){
        this.country.deleteCountry(this.countryName).subscribe(response=>{
          console.log(response);
          this.deletedCountryData = response;
        })
      }


  locationsInCountryData: any = "";

  submitRegionDataToDisplayCountries(){
    this.country.getAllLocationsInCountry(this.countryName).subscribe(response=>{
      // console.log(response);
      this.locationsInCountryData = response;
      console.log(this.locationsInCountryData);
    })
  }


  countryById: string;

  getCountryByIdMethod(event: any){
    this.countryById = event.target.value;
    console.log("region id: " + this.countryById)
  }

  countryByIdData: any = "";

  submitGetCountryById(){
    this.country.getCountryById(this.countryById).subscribe(response=>{
      // console.log(response);
      this.countryByIdData = response;
      console.log(this.countryByIdData);
    })
  }







      // submitUser(){
      //   this.country.getAllCountries().subscribe(data=>{
      //     // this.regions=data;
      //     // console.log(this.regions);
      //     this.userResponse = data;
      //     console.log(this.userResponse[2])
      //   })
      // }

}
