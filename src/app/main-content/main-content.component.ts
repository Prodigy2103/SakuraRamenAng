import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './../main-content/landingPage/landingPage.component';
import { OurMenuComponent } from './../main-content/our-menu/our-menu.component';
import { HowToOrderComponent } from './../main-content/how-to-order/how-to-order.component'
import { FindUsComponent } from './find-us/find-us.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, OurMenuComponent, HowToOrderComponent, FindUsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
}
