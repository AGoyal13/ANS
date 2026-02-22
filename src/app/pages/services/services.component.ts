import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SERVICES } from '../../shared/data/services.data';
import { Service } from '../../shared/models/service.model';

@Component({
  selector: 'ans-services',
  imports: [PageBannerComponent, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  protected readonly services: Service[] = SERVICES;
}
