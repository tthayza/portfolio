import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ETheme } from '../../enums/theme.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentTheme!: ETheme;
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
