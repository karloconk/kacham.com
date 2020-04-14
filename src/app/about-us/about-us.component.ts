import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  bg = '#87d8ee';
  karlosub      = "Developer";
  karlores      = "Creador";
  karlores2     = "Músico";
  karlored1     = "https://twitter.com/808khz";
  karlored2     = "https://www.facebook.com/Kalavera-325778287570205/";
  samsub        = "Product designer";
  samres        = "Ilustradora";
  samres2       = "Animadora";
  samred1       = "https://www.instagram.com/benjiless/";
  samred2       = "https://www.facebook.com/benjiless.art/";

  bImage = "./../../assets/scalableVectorGraphics/aboutUsDay.svg";
  mobileOn = false;
  nightMode = false;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({
      matches
    }) => {

      return [{
          cols: 1,
          rows: 3,
          image:  "./../../assets/chamu.png",
          tiitle: "Samantha",
          subt:     this.samsub,
          resumen:  this.samres,
          resumen2: this.samres2,
          red1:     this.samred1,
          red2:     this.samred2
        }, {
          cols: 1,
          rows: 3,
          image:  "./../../assets/ka.png",
          tiitle: "Karlo",
          subt:     this.karlosub,
          resumen:  this.karlores,
          resumen2: this.karlores2,
          red1:     this.karlored1,
          red2:     this.karlored2
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private elementRef: ElementRef) {}

  ngOnInit(): void {
    let d = new Date();
    if (d.getHours() > 19) {
      this.nightMode = true;
      this.bImage = "./../../assets/scalableVectorGraphics/aboutUsNight.svg";
    }
    if (window.innerWidth < 1000) {
      this.mobileOn = true
    }
  }

  ngAfterViewInit() {
    if (this.nightMode) {
      this.bg = "#000066"
    }

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.bg;
  }

  openthis(textom) {
    window.open(textom)
  }

}
