import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
})
export class UserItemComponent {
  id = input<string>('');
  username = input<string>();
  select = output<string>({ alias: 'onUserSelect' });

  onSelect() {
    this.select.emit(this.id());
  }
}
