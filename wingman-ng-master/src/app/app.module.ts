import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LogedinComponent } from './logedin/logedin.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';
import { FacultyComponent} from './faculty/faculty.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LogedinComponent,
    MyloginComponent,
    MyregisterComponent,
    FacultyComponent,
    TeacherlistComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
