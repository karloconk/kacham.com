import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlegame',
  templateUrl: './singlegame.component.html',
  styleUrls: ['./singlegame.component.sass']
})
export class SinglegameComponent implements OnInit {

  bg = '#87d8ee';
  mobileOn = false;
  nightMode = false;
  bImage = "";
  appTitle = "";
  appSub   = "";
  appdesc  = "";
  appimg   = "";
  backgColor = "#ffffff"

  apps =  [ {
    name:        "?",
    subtitle:    "",
    description: "",
    appimage:    "",
    background:  "",
    bcolor:      ""
  },  {
      name:        "Galleta de la suerte",
      subtitle:    "¿Listo para saber tu suerte?",
      description: "Con la app de la suerte para iOS, podrás conocer tu suerte en cualquier momento.\nNo te andes a medias, consulta tu suerte con un tap siempre.",
      appimage:    "./../../assets/adad.png",
      background:  "./../../assets/fortuneB.png",
      bcolor:      "#993333"
    }
  ];

  constructor(private elementRef: ElementRef,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let appnow = this.apps[params.get('id')];
      let d = new Date();
      if (d.getHours() > 19) {
        this.nightMode = true;
      }

      this.bImage     = appnow.background;
      this.appimg     = appnow.appimage;
      this.appTitle   = appnow.name;
      this.appSub     = appnow.subtitle;
      this.appdesc    = appnow.description;
      this.backgColor = appnow.bcolor;

      if (window.innerWidth < 1500) {
        this.mobileOn = true
      }
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.backgColor;
  }

}
