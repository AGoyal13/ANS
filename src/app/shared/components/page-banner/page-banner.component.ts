import { Component, input } from '@angular/core';

@Component({
  selector: 'ans-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss',
})
export class PageBannerComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  breadcrumb = input<string>('');
}
