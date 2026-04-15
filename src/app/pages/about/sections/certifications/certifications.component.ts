import { Component, signal, HostListener } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

interface CertificateTile {
  title: string;
  issuer: string;
  year: string;
  imageSrc: string;
}

@Component({
  selector: 'ans-certifications',
  imports: [SectionHeaderComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  protected readonly certificates: CertificateTile[] = [
    {
      title: 'ISO 9001:2015',
      issuer: 'Quality Management System — MAX Certifications',
      year: '2024–2027',
      imageSrc: 'images/certificates/cert-01.jpg',
    },
    {
      title: 'ISO 45001:2018',
      issuer: 'Occupational Health & Safety Management — MAX Certifications',
      year: '2024–2027',
      imageSrc: 'images/certificates/cert-02.jpg',
    },
    {
      title: 'Certificate of Excellence',
      issuer: '1 Million Safe Man Hours — HMEL, Guru Gobind Singh Refinery, Bathinda',
      year: '2016–17',
      imageSrc: 'images/certificates/cert-03.jpg',
    },
    {
      title: 'Certificate of Appreciation',
      issuer: '1 Million Safe Man Hours — HMEL / EIL / B&R, Pipe Rack & Civil Works',
      year: '2018–20',
      imageSrc: 'images/certificates/cert-05.jpg',
    },
    {
      title: 'Certificate of Appreciation',
      issuer: '2.5 Lac Safe Man Hours — HMEL / Chemie-Tech DMCC, Construction Tanks Foundation',
      year: '2018',
      imageSrc: 'images/certificates/cert-06.jpg',
    },
    {
      title: "MD's Safety Award",
      issuer: 'Suraksha Sahyogi Puraskar — Tata Chemicals, Babrala',
      year: '2014–15',
      imageSrc: 'images/certificates/cert-07.jpg',
    },
    {
      title: 'Yara India Safety Award',
      issuer: 'Suraksha Sahyogi Prashansha Puruskar — Yara Fertilisers India Pvt. Ltd., Babrala',
      year: '2023',
      imageSrc: 'images/certificates/cert-08.jpg',
    },
    {
      title: 'Certificate of Appreciation',
      issuer: '2.5 Lac Safe Man Hours — HMEL / Chemie-Tech DMCC, Construction Tanks Foundation',
      year: '2018',
      imageSrc: 'images/certificates/cert-09.jpg',
    },
    {
      title: 'Safety Trophy — Best Performer',
      issuer: 'Chambal Fertilisers & Chemicals Ltd.',
      year: '2010–11',
      imageSrc: 'images/certificates/cert-10.jpg',
    },
    {
      title: 'Certificate of Appreciation',
      issuer: '1 Million Safe Man Hours — HMEL / EIL / SMC, Civil Package ASRS 02, Bathinda',
      year: '2019–20',
      imageSrc: 'images/certificates/cert-11.jpg',
    },
    {
      title: "MD's Safety Award",
      issuer: 'Suraksha Sahyogi Prashansha Patra — Tata Chemicals, Babrala',
      year: '2012',
      imageSrc: 'images/certificates/cert-12.jpg',
    },
  ];

  protected activeCert = signal<CertificateTile | null>(null);
  protected pdfModalOpen = signal(false);

  openCert(cert: CertificateTile): void {
    this.activeCert.set(cert);
  }

  closeCert(): void {
    this.activeCert.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeCert();
    this.pdfModalOpen.set(false);
  }
}
