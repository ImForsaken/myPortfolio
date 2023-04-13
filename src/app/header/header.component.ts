import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLinkIndex = -1;
  language: string = 'en';

  constructor(
    private router: Router,
    public navigation: NavigationService,
    public translate: TranslateService,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.currentLanguage.subscribe((language) => {
      this.language = language;
    });

    const navLinks = document.querySelectorAll('.desktopNav a');
    const mobileLinks = document.querySelectorAll('.mobileNavLinks a');
    const checkBox = document.getElementById('menyAvPaa') as HTMLInputElement;

    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    });

    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        this.activeLinkIndex = index;
      });
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        checkBox.checked = false;
      });
    });
  }

  isActive(index: number): boolean {
    return this.activeLinkIndex === index;
  }
}
