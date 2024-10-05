import { ThemeService } from './../../services/theme.service';
import { Component, Input } from '@angular/core';
import { ETheme } from '../../enums/theme.enum';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() textContent?: string;

  currentTheme!: ETheme;
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
