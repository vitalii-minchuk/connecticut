import { Component } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { EAppStorageKeys } from '../../enums';
import { UserListComponent } from '../../components/users/user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private localStorageService: LocalStorageService) {}

  addItemToStorage() {
    this.localStorageService.setItem(EAppStorageKeys.TEST_KEY, 'test');
  }

  removeItemFromStorage() {
    this.localStorageService.removeItem(EAppStorageKeys.TEST_KEY);
  }
}
