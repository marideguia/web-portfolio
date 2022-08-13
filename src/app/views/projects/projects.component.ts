import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
