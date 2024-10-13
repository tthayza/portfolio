import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgClass, RouterLinkActive, NgIf],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  showModal: boolean = false;
  headerElements: string[] = ['portfolio', 'projetos', 'jornada'];
  activeSection!: string;
  imgLogo = '../../../assets/t-logo-bg.png';
  menuHamburguer = '../../../assets/menu-light.png';
  currentTheme!: ETheme;
  currentIcon = '../../../assets/moon-light.svg';

  constructor(private themeService: ThemeService) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateIcons(theme);
    });
    this.setActiveMenuItem();
    window.addEventListener('scroll', () => {
      this.setActiveMenuItem();
    });
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

  updateIcons(theme: ETheme) {
    if (theme === ETheme.DarkTheme) {
      this.currentIcon = '../../../assets/sun-dark.svg';
      this.imgLogo = '../../../assets/t-logo-bg-dark.png';
      this.menuHamburguer = '../../../assets/icon-menu-dark.png';
    } else {
      this.menuHamburguer = '../../../assets/icon-menu-light.png';
      this.imgLogo = '../../../assets/t-logo-bg-light.png';
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

  formatItem(item: string): string {
    return item.toLowerCase().replace(/ /g, '-');
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setActiveMenuItem() {
    const sections = document.querySelectorAll(
      'app-banner, app-projects, app-achievements'
    );
    sections.forEach((section) => {
      const top = (section as HTMLElement).getBoundingClientRect().top;
      const height = (section as HTMLElement).offsetHeight;

      if (top >= 0 && top <= height) {
        const id = section.getAttribute('id');
        if (id) {
          this.activeSection = id;
        }
      }
    });
  }
}
