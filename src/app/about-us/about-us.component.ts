import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  backgColor    = "#f79ab1"
  karlosub      = "Developer";
  karlores      = "Developer Creador Músico";
  karlored1     = "twitter: @tiwittermiogg";
  karlored2     = "fb: @kalavera";
  samsub        = "Product designer";
  samres        = "Ilustradora Diseñadora";
  samred1       = "twitter: @tiwittermiogg";
  samred2       = "fb: @samantha";

  bImage = "./../../assets/fortuneB.png";
  mobileOn = false;
  nightMode = false;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({
      matches
    }) => {

      return [{
          cols: 1,
          rows: 3,
          image:  "./../../assets/cham.png",
          tiitle: "Samantha",
          subt:    this.samsub,
          resumen: this.samres,
          red1:    this.samred1,
          red2:    this.samred2
        }, {
          cols: 1,
          rows: 3,
          image:  "./../../assets/ka.png",
          tiitle: "Karlo",
          subt:    this.karlosub,
          resumen: this.karlores,
          red1:    this.karlored1,
          red2:    this.karlored2
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private elementRef: ElementRef) {}

  ngOnInit(): void {
    let d = new Date();
    if (d.getHours() < 19) {
      this.nightMode = true;
    }
    if (window.innerWidth < 1500) {
      this.mobileOn = true
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.backgColor;
  }

}
