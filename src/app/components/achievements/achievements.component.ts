import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { CommonModule } from '@angular/common';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

export interface IMilestone {
  step: string;
  year: string;
  badge: string;
  title: string;
  comment: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [HeadingComponent, CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent implements OnInit {
  currentTheme!: ETheme;

  journeyItems: IMilestone[] = [
    {
      step: '01.',
      year: '2022',
      badge: 'BACKEND JAVA',
      title: 'Bootcamp Orange Tech',
      comment:
        'Fui reconhecida como participante de destaque e tive a oportunidade de compartilhar minha trajetória durante o bootcamp com toda a comunidade.',
    },
    {
      step: '02.',
      year: '2023',
      badge: 'FRONT-END ANGULAR',
      title: 'Santander Coders 23.1',
      comment:
        'Conquistei uma das 300 vagas entre milhares de pessoas inscritas na trilha com foco em Angular. Representando a turma 1005, recebi feedbacks positivos de instrutores e colegas.',
    },
    {
      step: '03.',
      year: '2024',
      badge: 'FULLSTACK WEB',
      title: 'Programa de Formação V5',
      comment:
        'Entre mais de 13 mil candidatos, fui selecionada após testes de aptidão, vídeoentrevista e um hackathon onde desenvolvi projeto web fullstack.',
    },
    {
      step: '04.',
      year: 'Hoje',
      badge: 'DATA & NEGÓCIOS',
      title: 'Setor Financeiro',
      comment:
        'Atuação no desenvolvimento de soluções orientadas a dados e acompanhamento de indicadores que elevam a produtividade e antecipam necessidades de negócio.',
    },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
