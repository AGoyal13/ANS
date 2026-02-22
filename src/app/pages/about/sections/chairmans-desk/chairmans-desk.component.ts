import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'ans-chairmans-desk',
  imports: [SectionHeaderComponent],
  templateUrl: './chairmans-desk.component.html',
  styleUrl: './chairmans-desk.component.scss',
})
export class ChairmanssDeskComponent {
  protected photoError = signal(false);
}
