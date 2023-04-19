import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationEnd, Router } from '@angular/router';
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
  imprintRoute = false;

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
    const checkBox = document.getElementById('menyAvPaa') as HTMLInputElement;

    this.navigationHandler();
    this.checkBoxEvent(checkBox);
    this.navLinksEvent();
    this.mobileNavLinksEvent(checkBox);
  }

  navigationHandler() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/#aboutMe') {
          this.activeLinkIndex = 0;
        } else if (event.url == '/#mySkills') {
          this.activeLinkIndex = 1;
        } else if (event.url == '/#portfolio') {
          this.activeLinkIndex = 2;
        } else if (event.url == '/#form') {
          this.activeLinkIndex = 3;
        } else if (event.url == '/imprint') {
          this.activeLinkIndex = 4;
        }
      }
    });
  }

  checkBoxEvent(checkBox: HTMLInputElement) {
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  navLinksEvent() {
    const navLinks = document.querySelectorAll('.desktopNav a');
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        this.activeLinkIndex = index;
      });
    });
  }

  mobileNavLinksEvent(checkBox: HTMLInputElement) {
    const mobileLinks = document.querySelectorAll('.mobileNavLinks a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        checkBox.checked = false;
        document.body.style.overflow = '';
      });
    });
  }

  isActive(index: number): boolean {
    return this.activeLinkIndex === index;
  }
}
