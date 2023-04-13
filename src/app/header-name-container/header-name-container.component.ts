import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-header-name-container',
  templateUrl: './header-name-container.component.html',
  styleUrls: ['./header-name-container.component.scss'],
})
export class HeaderNameContainerComponent {
  language!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentLanguage.subscribe((language) => {
      this.language = language;
    });
  }
}
