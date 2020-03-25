import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StudentsComponent } from './students/students.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { TeacherComponent } from './teacher/teacher.component';
import { BoardComponent } from './board/board.component';
import { WorkoutComponent } from './workout/workout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import {MatSortModule, MatInputModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { DailyComponent } from './daily/daily.component';
import { PopupWorkoutComponent } from './popup-workout/popup-workout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { DatepickerComponent } from './datepicker/datepicker.component'
import{MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StudentsComponent,
    TeacherComponent,
    BoardComponent,
    WorkoutComponent,
    DailyComponent,
    PopupWorkoutComponent,
    DatepickerComponent
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        { path: 'students', component: StudentsComponent, canActivate: [AuthorizeGuard] },
        { path: 'teachers', component: TeacherComponent, canActivate: [AuthorizeGuard] },
        { path: 'boards', component: BoardComponent, canActivate: [AuthorizeGuard] },
        { path: 'exercises', component: WorkoutComponent, canActivate: [AuthorizeGuard] },
        { path: 'workoutexercises', component: DailyComponent, canActivate: [AuthorizeGuard] },
    ]),
    NoopAnimationsModule, MatTableModule, MatSortModule,MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
    






   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    //{ provide: MatBottomSheet, useValue: {}}
  ],
  bootstrap: [AppComponent], 
  entryComponents: [PopupWorkoutComponent]
})

export class AppModule { }
