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
  appimg   = [];
  appico   = "";
  backgColor = "#ffffff"
  availableApple  = false;
  availableGoogle = false;
  teibunrow = "380px";

  pathcookies = "./../../assets/cookiess/"

  apps =  [ {
    name:        "?",
    subtitle:    "",
    description: "",
    appimage:    [],
    appicon:    "",
    background:  "",
    bcolor:      "",
    apple:       false,
    google:      false
  },  {
      name:        "Galleta de la suerte",
      subtitle:    "¿Listo para saber tu suerte?",
      description: "Con la app de la suerte para iOS, podrás conocer tu suerte en cualquier momento.\nNo te andes a medias, consulta tu suerte con un tap siempre.",
      appimage:    [ this.pathcookies +"cookie1.png", this.pathcookies +"cookie2.png", this.pathcookies +"cookie3.png", this.pathcookies +"cookie4.png", this.pathcookies +"cookie5.png", this.pathcookies +"cookie6.png", this.pathcookies +"cookie7.png", this.pathcookies +"cookie8.png" ],
      appicon:    "./../../assets/cookieApp.png",
      background:  "./../../assets/scalableVectorGraphics/fortuneB.jpg",
      bcolor:      "#993333",
      apple:       true,
      google:      false
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
      this.appico     = appnow.appicon
      this.appTitle   = appnow.name;
      this.appSub     = appnow.subtitle;
      this.appdesc    = appnow.description;
      this.backgColor = appnow.bcolor;
      this.availableApple  = appnow.apple;
      this.availableGoogle = appnow.google;

      if (window.innerWidth < 1000) {
        this.mobileOn = true
        this.teibunrow = "380px";
      }
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.backgColor;
  }

}
