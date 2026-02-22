import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CLIENTS } from '../../shared/data/clients.data';
import { Client, ClientSector } from '../../shared/models/client.model';

interface SectorGroup {
  label: string;
  sector: ClientSector;
  clients: Client[];
}

@Component({
  selector: 'ans-clients',
  imports: [PageBannerComponent, SectionHeaderComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  protected readonly allClients: Client[] = CLIENTS;

  // Track logo load errors per client id
  protected readonly logoErrors = new Map<string, boolean>();

  onLogoError(clientId: string): void {
    this.logoErrors.set(clientId, true);
  }

  hasLogoError(clientId: string): boolean {
    return this.logoErrors.get(clientId) ?? false;
  }

  logoSrc(clientId: string): string {
    return `/images/clients/${clientId}.svg`;
  }

  protected readonly sectorLabels: Record<ClientSector, string> = {
    'oil-gas': 'Oil, Gas & Energy',
    fertilizer: 'Fertilizers & Chemicals',
    infrastructure: 'Infrastructure',
    government: 'Government & PSU',
    education: 'Education',
    industrial: 'Industrial',
    power: 'Power',
    'real-estate': 'Real Estate',
  };

  protected readonly sectorGroups: SectorGroup[] = (
    Object.keys(this.sectorLabels) as ClientSector[]
  )
    .map((sector) => ({
      label: this.sectorLabels[sector],
      sector,
      clients: CLIENTS.filter((c) => c.sector === sector),
    }))
    .filter((g) => g.clients.length > 0);

  protected readonly longTermClients: Client[] = CLIENTS.filter(
    (c) => c.associatedSince && c.totalContractsCrore
  );
}
