import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LogedinComponent } from './logedin/logedin.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { FacultyComponent} from './faculty/faculty.component';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'welcome', component: LogedinComponent},
  {path: 'login', component: MyloginComponent},
  {path: 'register', component: MyregisterComponent},
  {path: 'faculty', component: FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
