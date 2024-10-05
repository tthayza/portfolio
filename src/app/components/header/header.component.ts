import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ETheme } from '../../enums/theme.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerElements = ['Página Inicial', 'Tecnologias', 'Projetos', 'Contato'];
  imgLogo = '../../../assets/t-logo-bg.png';
  menuHamburguer = '../../../assets/menu-light.png';
  currentTheme!: ETheme;
  currentIcon = '../../../assets/moon-light.svg';

  isMobile: boolean = false;
  showModal: boolean = false;

  constructor(private themeService: ThemeService) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.showModal = false;
    }
  }

  toggleMenu() {
    this.showModal = !this.showModal;
  }

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateIcons(theme);
    });
  }
  updateIcons(theme: ETheme) {
    if (theme === ETheme.DarkTheme) {
      this.currentIcon = '../../../assets/sun-dark.svg';
    } else {
      this.currentIcon = '../../../assets/moon-light.svg';
    }
  }

  public toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = ETheme.DarkTheme;
      this.themeService.setDarkTheme();
      this.updateIcons(ETheme.DarkTheme);
    } else {
      this.currentTheme = ETheme.LightTheme;
      this.themeService.setLightTheme();
      this.updateIcons(ETheme.LightTheme);
    }
  }
}
