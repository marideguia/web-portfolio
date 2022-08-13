import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
