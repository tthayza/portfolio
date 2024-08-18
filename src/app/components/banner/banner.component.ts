import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeadingComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  pictureBanner = '../../../assets/profile.png';
}
