import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() textContent?: string;
}
