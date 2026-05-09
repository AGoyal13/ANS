import { Component, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Project } from '../../../../shared/models/project.model';

@Component({
  selector: 'ans-project-card',
  imports: [DatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<Project>();

  protected photoError = signal(false);
}
