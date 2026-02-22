export type EquipmentCategory =
  | 'earth-moving'
  | 'road-construction'
  | 'concrete-works'
  | 'lifting-cranes'
  | 'batching-mixing'
  | 'power-utilities'
  | 'fabrication'
  | 'shuttering-scaffolding';

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  quantity: number;
  make?: string;
  capacity?: string;
}
