import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy, ElementRef, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { CookiesNoticeComponent } from '../cookies-notice/cookies-notice.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class NavMainComponent {
  mobileQuery: MediaQueryList;
  isTrue = true;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private elementRef: ElementRef,
    private router: Router,
    public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log(this.router.url);
  }

  goAboutUs() {
    this.router.navigate(['/aboutUs']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onActivateSmooth(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}
