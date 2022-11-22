import { Component, OnInit } from '@angular/core';
import { Status } from './status';
import { StatusService } from './status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'front-nimitz';
}
