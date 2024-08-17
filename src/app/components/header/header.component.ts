import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

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

  isMobile: boolean = false;
  showModal: boolean = false;

  constructor() {
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
}
