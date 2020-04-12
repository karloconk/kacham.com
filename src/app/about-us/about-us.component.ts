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
  karlores      = "Creador";
  karlores2     = "Músico";
  karlored1     = "https://www.facebook.com/KaCham-Games-104996357774221";
  karlored2     = "https://www.facebook.com/KaCham-Games-104996357774221";
  samsub        = "Product designer";
  samres        = "Ilustradora";
  samres2       = "Animadora";
  samred1       = "https://www.facebook.com/KaCham-Games-104996357774221";
  samred2       = "https://www.facebook.com/KaCham-Games-104996357774221";

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
    }
    if (window.innerWidth < 1000) {
      this.mobileOn = true
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.backgColor;
  }

  openthis(textom) {
    window.open(textom)
  }

}
