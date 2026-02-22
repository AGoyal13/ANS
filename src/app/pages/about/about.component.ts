import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { CompanyStoryComponent } from './sections/company-story/company-story.component';
import { ChairmanssDeskComponent } from './sections/chairmans-desk/chairmans-desk.component';
import { GroupStructureComponent } from './sections/group-structure/group-structure.component';
import { PhilosophyComponent } from './sections/philosophy/philosophy.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';

@Component({
  selector: 'ans-about',
  imports: [
    PageBannerComponent,
    CompanyStoryComponent,
    ChairmanssDeskComponent,
    GroupStructureComponent,
    PhilosophyComponent,
    CertificationsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
