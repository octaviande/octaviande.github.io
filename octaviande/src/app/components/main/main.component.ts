import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { delay } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  @ViewChild(MatSidenav)
  private sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close()
        } else {
          this.sidenav.mode = 'side'
          this.sidenav.open()
        }
      });
  }

  closeSideNav(): void {
    if (window.innerWidth <= 800) {
      this.sidenav.close()
    }
  }
}
