import { Component, Input } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input()
  currentTheme = ETheme.LightTheme;
}
