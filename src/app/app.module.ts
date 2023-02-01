import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegionsComponent } from './components/regions/regions.component';
import { LocationsComponent } from './components/locations/locations.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/sliders/slider/slider.component';
import { TrialComponent } from './components/trials/trial/trial.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    RegionsComponent,
    LocationsComponent,
    DepartmentsComponent,
    JobsComponent,
    EmployeesComponent,
    JobHistoryComponent,
    SliderComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
