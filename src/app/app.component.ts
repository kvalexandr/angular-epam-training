import { Component } from '@angular/core';

export interface Course {
  id: number,
  title: string,
  create_data: string,
  duration: number,
  description: string
}

export interface User {
  id: number,
  first_name: string,
  last_name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-epam-training';
}
