import { Component } from '@angular/core';
import { EIcon } from './enums/EIcon.enum';
import { ETheme } from './enums/ETheme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  currentIcon = EIcon.ICON_SUN;
  currentTheme = ETheme.LightTheme;
  isDarkTheme = false;
  public toggleTheme() {
    this.currentTheme =
      this.currentTheme === ETheme.LightTheme
        ? ETheme.DarkTheme
        : ETheme.LightTheme;
    this.currentIcon =
      this.currentIcon === EIcon.ICON_SUN ? EIcon.ICON_MOON : EIcon.ICON_SUN;
  }
}
