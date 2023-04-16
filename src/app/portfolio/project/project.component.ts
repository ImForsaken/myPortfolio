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
        'https://herbst-kevin.de/Join/index.html',
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
        'https://herbst-kevin.de/ringoffire/',
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
      image: 'projectEPL.svg',
      links: [
        'https://herbst-kevin.de/El%20pollo%20loco/index.html',
        'https://github.com/ImForsaken/El-pollo-loco',
      ],
    },
    {
      title: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'Rest-Api', 'Chart.js'],
      text: [
        'Beautiful Pokedex from the famous Pokemon Anime/Game. Search, Learn about your favourite Pokemons from the Pokemon universe!',
        'Schöner Pokedex aus dem berühmten Pokemon-Anime/Spiel. Durchsuche und lerne mehr über deine Lieblings-Pokemons aus dem Pokemon-Universum!',
      ],
      image: 'projectPokedex.png',
      links: [
        'https://herbst-kevin.de/Pokemondex/index.html',
        'https://github.com/ImForsaken/Pokedex',
      ],
    },
    {
      title: 'Simple CRM',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Firebase'],
      text: [
        'Relationship Management system working with CRUD functionality.',
        'Kundenbeziehungsmanagement-System mit CRUD-Funktionalität.',
      ],
      image: 'projectCrm.svg',
      links: ['https://herbst-kevin.de', 'https://github.com/ImForsaken'],
    },
  ];
}
