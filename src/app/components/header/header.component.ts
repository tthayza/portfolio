import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EIcon } from 'src/app/enums/EIcon.enum';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  currentIcon = EIcon.ICON_MOON;
  @Input()
  currentTheme = ETheme.LightTheme;

  @Output()
  changeTheme = new EventEmitter<any>();

  emitChangeTheme() {
    this.changeTheme.emit();
  }
}
