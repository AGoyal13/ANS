import { Component, signal, computed } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { PROJECTS } from '../../shared/data/projects.data';
import { Project, ProjectCategory } from '../../shared/models/project.model';

@Component({
  selector: 'ans-projects',
  imports: [PageBannerComponent, ProjectCardComponent, ProjectFilterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly activeFilter = signal<ProjectCategory | 'all'>('all');

  protected readonly filteredProjects = computed<Project[]>(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  });

  protected readonly inProgressCount = computed(() =>
    PROJECTS.filter((p) => p.status === 'in-progress').length
  );

  protected readonly completedCount = computed(() =>
    PROJECTS.filter((p) => p.status === 'completed').length
  );

  onFilterChange(filter: ProjectCategory | 'all'): void {
    this.activeFilter.set(filter);
  }
}
