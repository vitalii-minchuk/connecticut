import { Component } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { EAppStorageKeys } from '../../enums';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
