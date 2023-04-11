import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLinkIndex = -1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navLinks = document.querySelectorAll('.desktopNav a');
    const mobileLinks = document.querySelectorAll('.mobileNavLinks a');
    const checkBox = document.getElementById('menyAvPaa') as HTMLInputElement;

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

    if (this.router.url == '/imprint') {
      console.log('erfolg');
      this.activeLinkIndex = 4;
    } else if (this.router.url == '/#form') {
      this.activeLinkIndex = 3;
    } else if (this.router.url == '/#portfolio') {
      this.activeLinkIndex = 2;
    } else if (this.router.url == '/#skills') {
      this.activeLinkIndex = 1;
    } else if (this.router.url == '/#aboutMe') {
      this.activeLinkIndex = 0;
    }
  }

  isActive(index: number): boolean {
    return this.activeLinkIndex === index;
  }
}
