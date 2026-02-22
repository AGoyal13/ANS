export type ProjectCategory =
  | 'civil-structural'
  | 'roads-highways'
  | 'irrigation'
  | 'buildings'
  | 'stadium-landscaping'
  | 'site-grading'
  | 'farmhouse-interior';

export interface Project {
  id: string;
  name: string;
  client: string;
  category: ProjectCategory;
  valueCrore?: number;
  completionDate?: string;
  location?: string;
  status: 'completed' | 'in-progress';
  description?: string;
}
