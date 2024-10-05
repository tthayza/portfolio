import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { ETheme } from './enums/theme.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    ProjectsComponent,
    AchievementsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  currentTheme = ETheme.LightTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme: ETheme) => {
      this.currentTheme = theme;
    });
  }
}
