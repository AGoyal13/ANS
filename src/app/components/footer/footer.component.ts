import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ans-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected logoError = false;
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Clients', path: '/clients' },
    { label: 'Equipment', path: '/assets' },
    { label: 'Contact', path: '/contact' },
  ];
}
