import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent {
  mobileIconsArray = [
    { name: 'Angular', icon: 'angularIcon' },
    { name: 'Typescript', icon: 'typescriptIcon' },
    { name: 'Javascript', icon: 'javascriptIcon' },
    { name: 'HTML', icon: 'htmlIcon' },
    { name: 'Firebase', icon: 'firebaseIcon' },
    { name: 'GIT', icon: 'gitIcon' },
    { name: 'CSS', icon: 'cssIcon' },
    { name: 'Material design', icon: 'materialDesignIcon' },
    { name: 'Rest-Api', icon: 'apiIcon' },
    { name: 'Scrum', icon: 'scrumIcon' },
    { name: 'Wordpress', icon: 'wordpressIcon' },
  ];
}
