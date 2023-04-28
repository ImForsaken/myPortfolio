import { Component } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  language!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentLanguage.subscribe((language) => {
      this.language = language;
    });
  }

  projects = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Backend'],
      text: [
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      ],
      image: 'projectJoin.png',
      links: [
        'https://herbst-kevin.de/Join/login.html',
        'https://github.com/ImForsaken/Join-282',
      ],
    },
    {
      title: 'Ring of Fire',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Firebase'],
      text: [
        'Fantastic drink game for private or public Partys which pushing the Players to their limits.',
        'Fantastisches Trinkspiel für private oder öffentliche Partys, das die Spieler an ihre Grenzen bringt.',
      ],
      image: 'projectROF.png',
      links: [
        'https://ring-of-fire.herbst-kevin.de/',
        'https://github.com/ImForsaken/Ring-of-Fire',
      ],
    },
    {
      title: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS', 'OOP'],
      text: [
        'Object orientated 2d jump and run game with unuiqe style and humour',
        'Objektorientiertes 2D-Jump-and-Run-Spiel mit einzigartigem Stil und Humor.',
      ],
      image: 'projectEPL.png',
      links: [
        'https://herbst-kevin.de/El%20pollo%20loco/index.html',
        'https://github.com/ImForsaken/El-pollo-loco',
      ],
    },
  ];
}
