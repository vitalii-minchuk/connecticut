import { Component, signal, WritableSignal } from '@angular/core';
import { User } from '../types';
import { users } from '../data';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users = users;
  public selectedUser: WritableSignal<User | null> = signal(null);

  selectUser(id: string) {
    const user = this.users.find((el) => el.id === id) ?? null;
    this.selectedUser.set(user);
  }
}
