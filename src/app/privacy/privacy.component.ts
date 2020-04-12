import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.sass']
})

export class PrivacyComponent implements OnInit {

  mobileOn = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    if (window.innerWidth < 1000) {
      this.mobileOn = true;
    }
  }

}
