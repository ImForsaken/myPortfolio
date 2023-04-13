import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}

  title = 'testAngularPortfolio';

  imprintRoute = false;

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
