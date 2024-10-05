import { Component, Input } from '@angular/core';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textBtn?: string;

  currentTheme!: ETheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
