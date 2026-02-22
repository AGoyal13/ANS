import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

interface GroupEntity {
  name: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'ans-group-structure',
  imports: [SectionHeaderComponent],
  templateUrl: './group-structure.component.html',
  styleUrl: './group-structure.component.scss',
})
export class GroupStructureComponent {
  protected readonly entities: GroupEntity[] = [
    {
      name: 'ANS Constructions Pvt. Ltd.',
      description:
        'The flagship company. Delivers civil and structural construction for mega-projects across highways, refineries, fertilizer plants, irrigation, buildings and stadiums.',
      highlights: [
        '₹147 Cr+ annual turnover (FY24)',
        'ISO 9001 & OHSAS 18001 certified',
        '25+ concurrent projects',
        'Pan-India operations',
      ],
    },
    {
      name: 'ANS Infrastructure Pvt. Ltd.',
      description:
        'Handles BOT highway infrastructure projects and large-scale road construction under PPP models.',
      highlights: [
        'BOT road projects',
        'Ujjain-Jhalawar Road (JV)',
        'BOT Road at Kaman, Rajasthan',
        'Highway PPP specialist',
      ],
    },
    {
      name: 'ANS Earthmovers',
      description:
        'Heavy earthmoving specialist division. Operates large fleets for site grading, earth dams, river flood protection and road earthworks.',
      highlights: [
        'Base: Junehra, Una, Himachal Pradesh',
        'Largest contract: 10M+ cubic metres',
        'Earth dams & flood protection',
        'Industrial site grading',
      ],
    },
    {
      name: 'IInd Opinion',
      description:
        'Consulting and contracting agency providing advisory services to EPC companies and industrial clients for expansion and project planning.',
      highlights: [
        'Industrial expansion advisory',
        'Service management contracts',
        'Clients: Toyo Engineering, L&T, CFCL',
        'Project feasibility consulting',
      ],
    },
  ];
}
