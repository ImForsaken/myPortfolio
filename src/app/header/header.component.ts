import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLinkIndex = -1;

  constructor() {}

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
  }

  isActive(index: number): boolean {
    return this.activeLinkIndex === index;
  }
}
