import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { CertificationsComponent } from '../about/sections/certifications/certifications.component';

@Component({
  selector: 'ans-certifications-page',
  imports: [PageBannerComponent, CertificationsComponent],
  templateUrl: './certifications-page.component.html',
  styleUrl: './certifications-page.component.scss',
})
export class CertificationsPageComponent {}
