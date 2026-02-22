import { Component, input } from '@angular/core';

@Component({
  selector: 'ans-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  value = input.required<string>();
  label = input.required<string>();
  prefix = input<string>('');
  suffix = input<string>('');
}
