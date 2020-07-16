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
  urlApple  = false;
  urlGoogle = false;
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
    google:      false,
    appleURL:       "",
    googleURL:      ""
  },  {
      name:        "Suertes",
      subtitle:    "¿Listo para saber tu suerte?",
      description: "Con la app de la suerte, podrás conocer tu suerte en cualquier momento y también relajarte con los divertidos minijuegos",
      appimage:    [ this.pathcookies +"cookie1.png", this.pathcookies +"cookie2.png", this.pathcookies +"cookie3.png", this.pathcookies +"cookie4.png", this.pathcookies +"cookie5.png", this.pathcookies +"cookie6.png"],
      appicon:    "./../../assets/cookieApp.png",
      background:  "./../../assets/scalableVectorGraphics/fortuneB.jpg",
      bcolor:      "#993333",
      apple:       true,
      google:      false,
      appleURL:       "https://apps.apple.com/mx/app/fortunas/id1501285379?l=en",
      googleURL:      ""
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

      this.bImage          = appnow.background;
      this.appimg          = appnow.appimage;
      this.appico          = appnow.appicon
      this.appTitle        = appnow.name;
      this.appSub          = appnow.subtitle;
      this.appdesc         = appnow.description;
      this.backgColor      = appnow.bcolor;
      this.availableApple  = appnow.apple;
      this.availableGoogle = appnow.google;
      this.urlApple        = appnow.appleURL
      this.urlGoogle       = appnow.googleURL

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
