export type ClientSector =
  | 'oil-gas'
  | 'fertilizer'
  | 'infrastructure'
  | 'government'
  | 'education'
  | 'industrial'
  | 'power'
  | 'real-estate';

export interface Client {
  id: string;
  name: string;
  shortName?: string;
  sector: ClientSector;
  logoSrc?: string;
  associatedSince?: number;
  totalContractsCrore?: number;
}
