import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mariclaire De Guia';  

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
