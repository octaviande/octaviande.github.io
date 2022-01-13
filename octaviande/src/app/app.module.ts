import { HostBinding, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  @HostBinding('class')
  get themeMode() {
    return 'theme-dark'
  }
}
