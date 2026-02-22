import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  {
    id: 'highways-roads',
    title: 'Highways & Roads',
    description:
      'Construction of national highways, state roads, BOT road projects, widening and strengthening of existing road corridors across India.',
    icon: 'road',
    highlights: [
      'National and state highway construction',
      'BOT (Build-Operate-Transfer) road projects',
      'Widening & strengthening of road corridors',
      'Road drainage and culvert works',
    ],
  },
  {
    id: 'refinery-petrochemicals',
    title: 'Refinery & Petrochemicals',
    description:
      'Civil and structural works for oil refineries, petrochemical complexes, LNG terminals, and process plants at major industrial sites across India.',
    icon: 'industry',
    highlights: [
      'Civil & structural works for oil refineries',
      'LNG terminal construction',
      'Petrochemical complex civil works',
      'OSBL & ISBL unit construction',
    ],
  },
  {
    id: 'fertilizer-plants',
    title: 'Fertilizer Plants',
    description:
      'Comprehensive construction services for fertilizer manufacturing plants including civil, structural, and allied works for major fertilizer producers.',
    icon: 'factory',
    highlights: [
      'Fertilizer plant civil & structural works',
      'Debottlenecking & revamp projects',
      'C & D type building construction',
      'Long-term maintenance contracts',
    ],
  },
  {
    id: 'irrigation',
    title: 'Irrigation & Water Resources',
    description:
      'Construction of dams, canals, distributaries, and micro-irrigation systems for state irrigation departments and water resource authorities.',
    icon: 'water',
    highlights: [
      'Dam and barrage construction',
      'Canal and distributary systems',
      'Micro-irrigation projects',
      'River flood protection works',
    ],
  },
  {
    id: 'industrial-buildings',
    title: 'Industrial Buildings',
    description:
      'Construction of LPG bottling plants, power plant buildings, workshop buildings, warehouses and allied industrial infrastructure.',
    icon: 'building-factory',
    highlights: [
      'LPG bottling plant construction',
      'Power plant civil works',
      'Workshop and warehouse buildings',
      'Roads, drains and culverts within plants',
    ],
  },
  {
    id: 'housing-institutional',
    title: 'Housing & Institutional',
    description:
      'Construction of luxury villas, townships, staff quarters, hostels, medical colleges, computer centres, and institutional campuses.',
    icon: 'building',
    highlights: [
      'Luxury villa & township construction',
      'Staff quarters and residential buildings',
      'Hostel and college buildings',
      'Computer centres and institutional campuses',
    ],
  },
  {
    id: 'stadium-sports',
    title: 'Stadium & Sports Complexes',
    description:
      'Construction of international cricket stadiums and sports infrastructure, including the iconic HPCA International Cricket Stadium at Dharamshala.',
    icon: 'stadium',
    highlights: [
      'International cricket stadium construction',
      'Sports infrastructure',
      'Parking lots and ancillary facilities',
      'Smart City sports and recreation projects',
    ],
  },
  {
    id: 'landscaping-horticulture',
    title: 'Landscaping & Horticulture',
    description:
      'Long-term maintenance and development of greenbelts, lawns, gardens and landscaping at industrial and institutional sites.',
    icon: 'leaf',
    highlights: [
      'Greenbelt maintenance contracts',
      'Lawn mowing and garden upkeep',
      'Campus landscaping projects',
      'Farm house development and resort landscaping',
    ],
  },
  {
    id: 'site-grading',
    title: 'Site Grading & Earthworks',
    description:
      'Large-scale site grading, land development and earthmoving works for industrial plants, power projects, and compound wall construction.',
    icon: 'excavator',
    highlights: [
      'Industrial plant site grading',
      'Thermal power project earthworks',
      'Land development contracts',
      'Compound wall construction',
    ],
  },
];
