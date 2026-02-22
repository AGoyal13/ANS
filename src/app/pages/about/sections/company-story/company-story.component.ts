import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'ans-company-story',
  imports: [SectionHeaderComponent],
  templateUrl: './company-story.component.html',
  styleUrl: './company-story.component.scss',
})
export class CompanyStoryComponent {
  protected founderPhotoError = signal(false);
}
