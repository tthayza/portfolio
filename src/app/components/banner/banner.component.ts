import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { CommonModule } from '@angular/common';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeadingComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  pictureBanner = '../../../assets/profile.png';
  currentTheme!: ETheme;

  iconGithub = '../../../assets/github-ico-light.png';
  iconLinkedin = '../../../assets/linkedin-ico-light.png';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateIcons(theme);
    });
  }

  updateIcons(theme: ETheme) {
    if (theme === ETheme.DarkTheme) {
      this.iconGithub = '../../../assets/github-ico-dark.png';
      this.iconLinkedin = '../../../assets/linkedin-ico-dark.png';
    } else {
      this.iconGithub = '../../../assets/github-ico-light.png';
      this.iconLinkedin = '../../../assets/linkedin-ico-light.png';
    }
  }
}
