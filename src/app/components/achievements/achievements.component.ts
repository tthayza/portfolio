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
        'Fui reconhecida como participante de destaque e tive a oportunidade de compartilhar minha trajetória durante o bootcamp com a comunidade.',
    },
    {
      title: 'Santander Coders 23.1 | Trilha Front-End Angular',
      comment:
        'Conquistei uma das 300 vagas em meio a milhares de pessoas inscritas e me dediquei à trilha de front-end com foco no framework Angular. Representando minha turma 1005, recebi feedbacks positivos de instrutores e colegas pela minha atuação e colaboração.',
    },
    {
      title: 'Programa de Formação V5',
      comment:
        'Entre mais de 13 mil candidatos, fui selecionada após um desafiador processo que incluiu testes de aptidão, vídeoentrevista e um hackathon, onde desenvolvi um projeto web fullstack.',
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
