import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private languageSource = new BehaviorSubject<string>('en');
  currentLanguage = this.languageSource.asObservable();

  constructor() {}

  setLanguage(language: string) {
    this.languageSource.next(language);
  }
}
