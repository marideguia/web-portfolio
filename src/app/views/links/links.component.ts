import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  onResumeClick() {
    window.open("/links/resume-2022-dg.pdf", '_blank')
  }


  constructor() { }

  ngOnInit(): void {
  }

}
