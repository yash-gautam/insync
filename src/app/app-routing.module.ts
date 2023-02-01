import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { RegionsComponent } from './components/regions/regions.component';
import { LocationsComponent } from './components/locations/locations.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { TrialComponent } from './components/trials/trial/trial.component';


const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "test", component: TestComponent},
  {path: "regions", component: RegionsComponent},
  {path: "locations", component: LocationsComponent},
  {path: "departments", component: DepartmentsComponent},
  {path: "jobs", component: JobsComponent},
  {path: "employees", component: EmployeesComponent},
  {path: "jobHistory", component: JobHistoryComponent},
  {path: "trial", component: TrialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
