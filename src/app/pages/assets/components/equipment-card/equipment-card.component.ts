import { Component, input } from '@angular/core';
import { Equipment } from '../../../../shared/models/equipment.model';

@Component({
  selector: 'ans-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrl: './equipment-card.component.scss',
})
export class EquipmentCardComponent {
  equipment = input.required<Equipment>();
}
