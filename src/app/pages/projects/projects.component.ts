import { Component, signal, computed } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { PROJECTS } from '../../shared/data/projects.data';
import { Project, ProjectCategory } from '../../shared/models/project.model';

type ProjectStatus = 'all' | 'in-progress' | 'completed';

@Component({
  selector: 'ans-projects',
  imports: [PageBannerComponent, ProjectCardComponent, ProjectFilterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly activeFilter = signal<ProjectCategory | 'all'>('all');
  protected readonly activeStatus = signal<ProjectStatus>('all');
  protected readonly sheetOpen = signal(false);

  protected readonly filteredProjects = computed<Project[]>(() => {
    const filter = this.activeFilter();
    const status = this.activeStatus();
    let projects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    if (status !== 'all') {
      projects = projects.filter((p) => p.status === status);
    }
    return projects;
  });

  protected readonly inProgressCount = computed(() =>
    PROJECTS.filter((p) => p.status === 'in-progress').length
  );

  protected readonly completedCount = computed(() =>
    PROJECTS.filter((p) => p.status === 'completed').length
  );

  protected readonly activeFiltersCount = computed(() => {
    let count = 0;
    if (this.activeFilter() !== 'all') count++;
    if (this.activeStatus() !== 'all') count++;
    return count;
  });

  protected readonly categoryOptions: { label: string; value: ProjectCategory | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Civil & Structural', value: 'civil-structural' },
    { label: 'Roads & Highways', value: 'roads-highways' },
    { label: 'Irrigation', value: 'irrigation' },
    { label: 'Buildings', value: 'buildings' },
    { label: 'Stadium & Landscaping', value: 'stadium-landscaping' },
    { label: 'Site Grading', value: 'site-grading' },
    { label: 'Farm House & Interior', value: 'farmhouse-interior' },
  ];

  protected readonly statusOptions: { label: string; value: ProjectStatus }[] = [
    { label: 'All', value: 'all' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Completed', value: 'completed' },
  ];

  onFilterChange(filter: ProjectCategory | 'all'): void {
    this.activeFilter.set(filter);
  }

  onStatusChange(status: ProjectStatus): void {
    this.activeStatus.set(status);
  }
}
