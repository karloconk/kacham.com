import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-base',
  templateUrl: './dashboard-base.component.html',
  styleUrls: ['./dashboard-base.component.css']
})

export class DashboardBaseComponent {

  cookietitle = "Suertes";
  cookietext = "App de la suerte para iOS";
  cookieimage = "./../../assets/cookieApp.png";
  cookieColour = "#ff0707";

  comingSoonTitle = "Más apps próximamente";
  comingSoontext = "Próximamente...";
  comingSoonimage = "./../../assets/noApp.png";
  comingSoonColour = "black";

  bg = '#87d8ee';
  mobileOn = false;
  nightMode = false;
  bImage = "./../../assets/scalableVectorGraphics/spring";

  therouhaeight = "350px";

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({
      matches
    }) => {

      return [{
          gnum: 1,
          cols: 2,
          rows: 1,
          image: this.cookieimage,
          text: this.cookietext,
          tiitle: this.cookietitle,
          colour: this.cookieColour
        },
        {
          gnum: 0,
          cols: 2,
          rows: 1,
          image: this.comingSoonimage,
          text: this.comingSoontext,
          tiitle: this.comingSoonTitle,
          colour: this.comingSoonColour
        },
      ];
    })
  );


  constructor(private breakpointObserver: BreakpointObserver,
    private elementRef: ElementRef,
    private router: Router) {}

  ngOnInit() {
    let d = new Date();
    if (d.getHours() > 19) {
      this.nightMode = true;
      this.bImage += "Night.jpg"
    } else {
      this.bImage += "Day.jpg"
    }
    if (window.innerWidth < 1000) {
      this.mobileOn = true;
      this.therouhaeight = "220px";
    }
  }

  goGame(gamenum) {
    this.router.navigate(['games/', gamenum]);
  }

  ngAfterViewInit() {
    if (this.nightMode) {
      this.bg = "#000066"
    }

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.bg;
  }

}
