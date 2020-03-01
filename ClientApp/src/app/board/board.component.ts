import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public boards: Board[];
    public newBoard: Board = {name:''};


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async ngOnInit() {
    this.boards = await this.http.get<Board[]>(this.baseUrl + 'teacher').toPromise();
  }
  async saveBoard() {
      await this.http.post<Board[]>(this.baseUrl + 'teacher', this.newBoard).toPromise();
      this.newBoard = { name: '' };
      this.boards = await this.http.get<Board[]>(this.baseUrl + 'teacher').toPromise();
  }

}
interface Board {
  name: string;
  
}
