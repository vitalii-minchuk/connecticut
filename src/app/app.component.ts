import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { HeaderComponent } from './components/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TasksListComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'connecticut';

  public tasks = [
    { name: 'Home', route: '/home', active: false },
    { name: 'About', route: '/about', active: false },
  ];
}
