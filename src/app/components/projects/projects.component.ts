import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { NgFor } from '@angular/common';
import { TagComponent } from '../tag/tag.component';
import { ButtonComponent } from '../button/button.component';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeadingComponent, NgFor, TagComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  hover = false;
  projectsList = [
    {
      id: '01',
      title: 'Rick&Morty',
      tags: ['Angular', 'SASS'],
      image: '../../../assets/rickmorty1.png',
      summary:
        'Consumo da API Rick&Morty onde são exibidas informações de personagens, localizações e episódios, além de conter a funcionalidade de favoritar e filtrar por meio de pesquisa esses elementos.',
      link: 'https://rick-and-morty-one-eta.vercel.app/homepage',
    },
    {
      id: '02',
      title: 'Orange Portfólio',
      tags: ['React', 'MUI', 'Tailwind'],
      image: '../../../assets/orange1.png',
      summary:
        'Aplicação na qual é possível visualizar projetos de outras pessoas, publicar, editar, excluir e pesquisar seus próprios projetos e também pré-visualizar. Também conta com processo de cadastro e login com Google.',
      link: 'https://orange-portfolio-djdm.onrender.com/',
    },
    {
      id: '03',
      title: 'Weather Page',
      tags: ['React', 'CSS', 'JavaScript'],
      image: '../../../assets/weatherpage.png',
      summary:
        'Página Web que apresenta informações metereológicas atuais, e também a previsão para os próximos dias através do consumo de duas APIs.',
      link: 'https://weather-page-ten.vercel.app/',
    },
    {
      id: '04',
      title: 'Lightning Adjusment',
      tags: ['React', 'CSS', 'JavaScript'],
      image: '../../../assets/lightningadjustment.png',
      summary:
        'Aplicação em que se pode manipular a cor, brilho e contraste dinamicamente em tempo real.',
      link: 'https://bora-codar-seven.vercel.app/',
    },
    {
      id: '05',
      title: 'Destino Revelado',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '../../../assets/destino-revelado.png',
      summary:
        'Nessa aplicação, através do envio de uma pergunta, seu destino é revelado por meio de uma resposta exibida na tela!',
      link: 'https://destino-revelado.vercel.app/?vercelToolbarCode=OhqNfnjTVxz6awk',
    },
    {
      id: '06',
      title: 'Forms Cartão de Crédito',
      tags: ['React', 'CSS', 'JavaScript'],
      image: '../../../assets/creditcard01.png',
      summary:
        'Essa aplicação exibe o cartão de crédito sendo preenchido simultaneamente ao digitar os dados!',
      link: 'https://credit-card-one-chi.vercel.app/',
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
