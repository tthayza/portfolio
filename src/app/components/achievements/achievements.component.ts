import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { NgFor } from '@angular/common';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [HeadingComponent, NgFor],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  iconStar = '../../../assets/icon-star.png';
  womanImg = '../../../assets/vr-cuate.svg';
  journeyItems = [
    {
      title: 'Bootcamp Orange Tech + Backend Java',
      comment:
        'Destaquei-me como participante de destaque e tive a oportunidade de compartilhar minha experiência com a comunidade.',
    },
    {
      title: 'Santander Coders 23.1 | Trilha Front-End Angular',
      comment:
        'Tive a honra de representar minha turma 1005, recebendo feedbacks positivos tanto dos instrutores quanto dos colegas.',
    },
    {
      title: 'Programa de Formação V5',
      comment:
        'Conquistei minha vaga em um processo seletivo desafiador, superando mais de 13 mil candidatos e passando por testes de aptidão, vídeoentrevista e hackathon fullstack.',
    },
  ];

  currentTheme!: ETheme;
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
