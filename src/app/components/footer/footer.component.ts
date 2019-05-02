import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.matIconRegistry
      .addSvgIcon(
        'linkedin',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          './../../../assets/images/linkedin.svg'
        )
      )
      .addSvgIcon(
        'phone',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          './../../../assets/images/phone.svg'
        )
      );
  }
}
