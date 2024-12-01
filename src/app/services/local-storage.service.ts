import { Injectable } from '@angular/core';

import { EAppStorageKeys } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: EAppStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: EAppStorageKeys): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: EAppStorageKeys): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
