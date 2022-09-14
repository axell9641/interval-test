import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HighlightDirective } from './highlight.directive';
import { BcpCiamDocumentDirective } from './bcp-ciam-document.directive';
import { SelectDocumentDirective } from './select-document.directive';
import { PasteDirective } from './paste.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HighlightDirective,
    BcpCiamDocumentDirective,
    SelectDocumentDirective,
    PasteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
