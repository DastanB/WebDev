import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LogedinComponent } from './logedin/logedin.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MyregisterComponent } from './myregister/myregister.component';
<<<<<<< HEAD
import { FacultyComponent } from './faculty/faculty.component';


=======
import { FacultyComponent} from './faculty/faculty.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 0c025de313e4f8366f9f03dfc21484cba35c2db5

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LogedinComponent,
    MyloginComponent,
    MyregisterComponent,
<<<<<<< HEAD
    FacultyComponent
=======
    FacultyComponent,
    TeacherlistComponent,
    ProfileComponent
>>>>>>> 0c025de313e4f8366f9f03dfc21484cba35c2db5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
