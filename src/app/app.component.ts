import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public router: Router) {}

  title = 'Portfolio';

  imprintRoute = false;

  ngAfterViewInit() {
    AOS.init();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.imprintRoute = event.url.includes('/imprint');
        if (event.url == '/imprint') {
          console.log('works', this.imprintRoute);
        }
      }
    });
  }
}
