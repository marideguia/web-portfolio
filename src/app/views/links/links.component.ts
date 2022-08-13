import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  onResumeClick() {
    window.open("/links/resume-2022-dg.pdf", '_blank')
  }

  isMobilePortrait=false;
  
  constructor(private responsive: BreakpointObserver) { 

  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      this.isMobilePortrait=false;
      if (result.matches) {
        this.isMobilePortrait=true;
      }
    })
  }

}
