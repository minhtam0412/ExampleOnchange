import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "./Model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExampleOnchange';
  user: User = new User();
  fullName = '';


  ngOnInit(): void {

  }

  setFullName() {
    this.user.FirstName = 'Tâm';
    this.user.LastName = 'Ngô';
  }
}
