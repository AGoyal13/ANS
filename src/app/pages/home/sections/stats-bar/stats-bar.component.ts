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
    { value: '58', label: 'Years of Excellence', suffix: '+' },
    { value: '147', label: 'Crore Annual Turnover', prefix: '₹', suffix: ' Cr' },
    { value: '30', label: 'Major Clients', suffix: '+' },
    { value: '25', label: 'Concurrent Projects', suffix: '+' },
    { value: '9', label: 'Service Domains' },
  ];
}
