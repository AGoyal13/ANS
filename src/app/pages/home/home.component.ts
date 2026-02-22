import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsBarComponent } from './sections/stats-bar/stats-bar.component';
import { ServicesPreviewComponent } from './sections/services-preview/services-preview.component';
import { ClientsStripComponent } from './sections/clients-strip/clients-strip.component';

@Component({
  selector: 'ans-home',
  imports: [HeroComponent, StatsBarComponent, ServicesPreviewComponent, ClientsStripComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
