import { Component, Input } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input()
  currentTheme = ETheme.LightTheme;
}
