import { Component, Input } from '@angular/core';
import { ETheme } from '../../enums/theme.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() tag?: string;

  currentTheme!: ETheme;
  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
