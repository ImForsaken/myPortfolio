import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = [
    {
      title: 'Join',
      skills: ['Javascript', 'HTML', 'CSS', 'Backend'],
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'projectJoin.svg',
      links: [
        'https://herbst-kevin.de/Join/index.html',
        'https://github.com/ImForsaken/Join-282',
      ],
    },
    {
      title: 'Ring of Fire',
      skills: ['Angular', 'Typescript', 'HTML', 'SCSS', 'Firebase'],
      text: 'Fantastic drink game for private or public Partys which pushing the Players to their limits.',
      image: 'projectROF.png',
      links: [
        'https://herbst-kevin.de/ringoffire/',
        'https://github.com/ImForsaken/Ring-of-Fire',
      ],
    },
    {
      title: 'El Pollo Loco',
      skills: ['Javscript', 'HTML', 'CSS', 'OOP'],
      text: 'Object orientated 2d jump and run game with unuiqe style',
      image: 'projectEPL.svg',
      links: [
        'https://herbst-kevin.de/El%20pollo%20loco/index.html',
        'https://github.com/ImForsaken/El-pollo-loco',
      ],
    },
    {
      title: 'Pokedex',
      skills: ['Javscript', 'HTML', 'CSS', 'Rest-Api', 'Chart.js'],
      text: 'Beautiful Pokedex from the famous Pokemon Anime/Game. Search, Learn about your favourite Pokemons from the Pokemon universe!',
      image: 'projectPokemon.svg',
      links: [
        'https://herbst-kevin.de/Pokemondex/index.html',
        'https://github.com/ImForsaken/Pokedex',
      ],
    },
    {
      title: 'Simple CRM',
      skills: ['Angular', 'Typescript', 'HTML', 'SCSS', 'Firebase'],
      text: 'Relationship Management system working with CRUD functionality.',
      image: 'projectCrm.svg',
      links: ['https://herbst-kevin.de', 'https://github.com/ImForsaken'],
    },
  ];
}
