import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { NgFor } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeadingComponent,
    ProjectCardComponent,
    NgFor,
    TagComponent,
    ButtonComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList = [
    {
      id: '01',
      title: 'projeto 1',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '02',
      title: 'projeto 2',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '03',
      title: 'projeto 3',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '04',
      title: 'projeto 4',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '05',
      title: 'projeto 5',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
    {
      id: '06',
      title: 'projeto 6',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/lightningadjustment.png',
    },
  ];
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.addAnimationClassOnScroll();
  }
  addAnimationClassOnScroll(): void {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          card.classList.add('animate');
        }
      });
    });

    cards.forEach((card) => observer.observe(card));
  }
}
