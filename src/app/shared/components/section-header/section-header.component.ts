import { Component, input } from '@angular/core';

@Component({
  selector: 'ans-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  align = input<'left' | 'center'>('left');
}
