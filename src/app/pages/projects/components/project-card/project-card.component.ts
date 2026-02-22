import { Component, input, signal, computed } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'ans-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<Project>();

  protected photoError = signal(false);
  protected photoSrc = computed(() => `/images/projects/${this.project().id}.jpg`);
}
