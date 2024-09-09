import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { NgFor } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeadingComponent, NgFor, TagComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList = [
    {
      id: '01',
      title: 'Weather Page',
      tags: ['React', 'CSS', 'JavaScript'],
      image: '../../../assets/weatherpage.png',
    },
    {
      id: '02',
      title: 'Rick&Morty',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/rickmorty1.png',
    },
    {
      id: '03',
      title: 'Lightning Adjusment',
      tags: ['Angular', 'SASS', 'JavaScript'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '04',
      title: 'Destino Revelado',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '../../../assets/destino-revelado.png',
    },
    {
      id: '05',
      title: 'Forms Cartão de Crédito',
      tags: ['React', 'CSS', 'JavaScript'],
      image: '../../../assets/creditcard01.png',
    },
    {
      id: '06',
      title: 'Orange Portfólio',
      tags: ['React', 'MUI', 'Tailwind', 'Node'],
      image: '../../../assets/orange1.png',
    },
  ];
}
