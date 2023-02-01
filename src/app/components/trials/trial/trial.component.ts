import { RegionsComponent } from './../../regions/regions.component';
import { TrialService } from './../../../services/trials/trial.service';
import { AfterViewInit, Component, Input, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { Results } from 'src/app/models/data-interface';
import { MainComponent } from 'src/app/main/main.component';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  nodeList: any = [];
  relationshipList: any = [];
  regionList: any = [];

  dummyComponent = RegionsComponent;

  constructor(private trial: TrialService) {

    this.trial.getAllNodes().subscribe(response =>{
      this.nodeList = response;
      console.log(response);
    })

    this.trial.getAllRelationships().subscribe(response =>{
      this.relationshipList = response;
      console.log(response);
    })

    this.trial.getAllRegions().subscribe(response =>{
      this.regionList = response;
      console.log(response);
    })



  }


  ngOnInit(): void {
  }

  assignComponet(component: string){
    if(component==='REGION')
      this.dummyComponent = RegionsComponent;
  }

}
