import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  @Input({ required: true }) tasks: {
    name: string;
    active: boolean;
    route: string;
  }[] = [];

  toggle(name: string, event: Event) {
    const index = this.tasks.findIndex((item) => item.name === name);
    this.tasks[index].active = !this.tasks[index].active;
  }
}
