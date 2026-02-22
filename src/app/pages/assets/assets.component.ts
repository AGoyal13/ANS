import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { EquipmentCardComponent } from './components/equipment-card/equipment-card.component';
import { EQUIPMENT } from '../../shared/data/equipment.data';
import { Equipment, EquipmentCategory } from '../../shared/models/equipment.model';

interface CategoryGroup {
  label: string;
  category: EquipmentCategory;
  items: Equipment[];
}

@Component({
  selector: 'ans-assets',
  imports: [PageBannerComponent, EquipmentCardComponent],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss',
})
export class AssetsComponent {
  private readonly categoryLabels: Record<EquipmentCategory, string> = {
    'earth-moving': 'Earth Moving',
    'road-construction': 'Road Construction',
    'concrete-works': 'Concrete Works',
    'lifting-cranes': 'Lifting & Cranes',
    'batching-mixing': 'Batching & Mixing',
    'power-utilities': 'Power & Utilities',
    fabrication: 'Fabrication',
    'shuttering-scaffolding': 'Shuttering & Scaffolding',
  };

  protected readonly categoryGroups: CategoryGroup[] = (
    Object.keys(this.categoryLabels) as EquipmentCategory[]
  )
    .map((category) => ({
      label: this.categoryLabels[category],
      category,
      items: EQUIPMENT.filter((e) => e.category === category),
    }))
    .filter((g) => g.items.length > 0);

  protected readonly totalItems = EQUIPMENT.reduce((sum, e) => sum + e.quantity, 0);
}
