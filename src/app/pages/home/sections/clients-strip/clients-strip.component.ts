import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CLIENTS } from '../../../../shared/data/clients.data';

@Component({
  selector: 'ans-clients-strip',
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './clients-strip.component.html',
  styleUrl: './clients-strip.component.scss',
})
export class ClientsStripComponent {
  protected readonly clients = CLIENTS;

  // Highlight a few long-standing clients with contract value
  protected readonly featuredClients = CLIENTS.filter((c) => c.totalContractsCrore).slice(0, 5);
}
