import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SERVICES } from '../../../../shared/data/services.data';
import { Service } from '../../../../shared/models/service.model';

@Component({
  selector: 'ans-services-preview',
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.scss',
})
export class ServicesPreviewComponent {
  protected readonly services: Service[] = SERVICES.slice(0, 6);
}
