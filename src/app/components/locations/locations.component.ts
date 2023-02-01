import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/locations/location.service';
import { NumberOfNodeService } from 'src/app/services/numberOfNodes/number-of-node.service';
import { Results } from 'src/app/models/data-interface';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];

  locations: Results;

  userList2: Results;


  numberOfRegionsList: any = [];
  numberOfCountriesList: any = [];
  numberOfLocationsList: any = [];
  numberOfDepartmentsList: any = [];
  numberOfJobsList: any = [];
  numberOfEmployeesList: any = [];
  numberOfJobHistoriesList: any = [];



  locationList: any = [];
  locationIdList: any = [];
  locationPostalCodeList: any = [];
  locationCountryIdList: any = [];

  employeeList: any = [];

  employeeNameList: any = [];
  employeeDepartmentList: any = [];


  constructor(private location: LocationService, private numberOfNodes: NumberOfNodeService) {

    // this.numberOfNodes.getNumberOfRegions().subscribe(response => {
    //   this.numberOfRegionsList = response;
    // })

    // this.numberOfNodes.getNumberOfCountries().subscribe(response => {
    //   this.numberOfCountriesList = response;
    // })

    // this.numberOfNodes.getNumberOfLocations().subscribe(response => {
    //   this.numberOfLocationsList = response;
    // })

    // this.numberOfNodes.getNumberOfDepartments().subscribe(response => {
    //   this.numberOfDepartmentsList = response;
    // })

    // this.numberOfNodes.getNumberOfJobs().subscribe(response => {
    //   this.numberOfJobsList = response;
    // })

    // this.numberOfNodes.getNumberOfEmployees().subscribe(response => {
    //   this.numberOfEmployeesList = response;
    // })

    // this.numberOfNodes.getNumberOfJobHistories().subscribe(response => {
    //   this.numberOfJobHistoriesList = response;
    // })



    this.location.getAllLocations().subscribe(response =>{
      this.locationList = response;
      // console.log(this.countryNameList);
    })

    this.location.getLocationId().subscribe(response =>{
      this.locationIdList = response;
      // console.log(this.countryNameList);
    })

    this.location.getLocationPostalCode().subscribe(response =>{
      this.locationPostalCodeList = response;
      // console.log(this.countryNameList);
    })

    this.location.getLocationCountryId().subscribe(response =>{
      this.locationCountryIdList = response;
      // console.log(this.countryNameList);
    })


    this.location.getAllEmployees().subscribe(response =>{
      this.employeeList = response;
      // console.log(this.employeeList);
    })


    this.location.getEmployeeName().subscribe(response =>{
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

  locationId: string;

  getLocationId(event: any){
    this.locationId = event.target.value;
    console.log("region id: " + this.locationId)
  }

  locationCity: string;

  getLocationCity(event: any){
    this.locationCity = event.target.value;
    console.log("region id: " + this.locationCity)
  }

  locationPostalCode: string;

  getLocationPostalCode(event: any){
    this.locationPostalCode = event.target.value;
    console.log("region id: " + this.locationPostalCode)
  }

  locationCountryId: string;

  getLocationCountryId(event: any){
    this.locationCountryId = event.target.value;
    console.log("region id: " + this.locationCountryId)
  }


  locationData: any = "";

      submitLocationData(){
        this.location.addLocation(this.locationId, this.locationCity, this.locationPostalCode, this.locationCountryId).subscribe(response=>{
          console.log(response);
          this.locationData = response;
        })
      }




  existingCityName: string;

  getExistingCityName(event: any){
    this.existingCityName = event.target.value;
    console.log("existing region name: " + this.existingCityName)
  }

  newCityName: string;

  getNewCityName(event: any){
    this.newCityName = event.target.value;
    console.log("existing region name: " + this.newCityName)
  }

  newCountryId: string;

  getNewCountryId(event: any){
    this.newCountryId = event.target.value;
    console.log("existing region name: " + this.newCountryId)
  }

  newLocationId: string;

  getNewLocationId(event: any){
    this.newLocationId = event.target.value;
    console.log("existing region name: " + this.newLocationId)
  }

  newPostalCode: string;

  getNewPostalCode(event: any){
    this.newPostalCode = event.target.value;
    console.log("existing region name: " + this.newPostalCode)
  }

  updatedLocationData: any = "";

      submitUpdatedLocationData(){
        this.location.updateLocation(this.existingCityName, this.newCityName, this.newCountryId, this.newLocationId, this.newPostalCode).subscribe(response=>{
          console.log(response);
          this.updatedLocationData = response;
        })
      }

  deletedLocationData: any = "";

  submitLocationDataToDelete(){
        this.location.deleteLocation(this.locationCity).subscribe(response=>{
          console.log(response);
          this.deletedLocationData = response;
        })
      }


  departmentsInLocationData: any = "";

  submitLocationDataToDisplayDepartments(){
    this.location.getAllDepartmentInLocation(this.locationCity).subscribe(response=>{
      // console.log(response);
      this.departmentsInLocationData = response;
      console.log(this.departmentsInLocationData);
    })
  }

  locationById: string;

  getLocationByIdMethod(event: any){
    this.locationById = event.target.value;
    console.log("location id: " + this.locationById)
  }

  locationByIdData: any = "";

  submitGetLocationById(){
    this.location.getLocationById(this.locationById).subscribe(response=>{
      // console.log(response);
      this.locationByIdData = response;
      console.log(this.locationByIdData);
    })
  }
}
