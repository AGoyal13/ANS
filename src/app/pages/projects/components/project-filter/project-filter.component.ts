import { Component, input, output } from '@angular/core';
import { ProjectCategory } from '../../../../shared/models/project.model';

interface FilterOption {
  label: string;
  value: ProjectCategory | 'all';
}

@Component({
  selector: 'ans-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent {
  activeFilter = input<ProjectCategory | 'all'>('all');
  filterChange = output<ProjectCategory | 'all'>();

  protected readonly filters: FilterOption[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Civil & Structural', value: 'civil-structural' },
    { label: 'Roads & Highways', value: 'roads-highways' },
    { label: 'Irrigation', value: 'irrigation' },
    { label: 'Buildings', value: 'buildings' },
    { label: 'Stadium & Landscaping', value: 'stadium-landscaping' },
    { label: 'Site Grading', value: 'site-grading' },
    { label: 'Farm House & Interior', value: 'farmhouse-interior' },
  ];

  setFilter(value: ProjectCategory | 'all'): void {
    this.filterChange.emit(value);
  }
}
