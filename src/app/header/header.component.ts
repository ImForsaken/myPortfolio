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

    const checkBox = document.getElementById('menyAvPaa') as HTMLInputElement;

    this.checkBoxEvent(checkBox);
    this.navLinksEvent();
    this.mobileNavLinksEvent(checkBox);
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
