import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HighlightDirective } from './highlight.directive';
import { BcpCiamDocumentDirective } from './bcp-ciam-document.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HighlightDirective,
    BcpCiamDocumentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
