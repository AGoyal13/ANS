import { Component } from '@angular/core';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

@Component({
  selector: 'ans-stats-bar',
  imports: [StatCardComponent],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.scss',
})
export class StatsBarComponent {
  protected readonly stats: Stat[] = [
    { value: '1966', label: 'Year Founded' },
    { value: '60', label: 'Years of Excellence', suffix: '+' },
    { value: '1,250', label: 'Active Order Book', prefix: '₹', suffix: '+' },
    { value: '30', label: 'Major Clients', suffix: '+' },
    { value: '24', label: 'Current Projects', suffix: '+' },
    { value: '9', label: 'Service Domains' },
  ];
}
