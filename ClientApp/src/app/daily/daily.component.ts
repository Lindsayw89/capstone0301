import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
public todayWorkouts:Workout[];
@Input() newDWorkout:Workout;


  constructor(private http: HttpClient,
     @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {

    this.todayWorkouts = await this.http.get<Workout[]>(this.baseUrl + Date).toPromise(); //FIX
  }

  async addDaily(){
    await this.http.post<Workout[]>(this.baseUrl + 'workout', this.newDWorkout).toPromise();
    this.newDWorkout={ title: '', description: '', workoutType:'', calories:0 , workoutDate: new Date(), id: 0};
    this.todayWorkouts= await this.http.get<Workout[]>(this.baseUrl +'workout').toPromise(); // FIX

  }

}
interface Workout {
  title: string;
  description: string;
  workoutType: string;
  calories: 0;
  workoutDate: Date;
  id: number;

}
