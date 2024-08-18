import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { ButtonComponent } from '../button/button.component';
import { IProject } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() dataProject?: IProject;
}
