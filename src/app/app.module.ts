import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ProductaComponent } from './producta/producta.component';
import { OffersComponent } from './offers/offers.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { FileTestComponent } from './file-test/file-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HomeComponent,
    AdminComponent,
    UserComponent,
    NotFoundComponent,
    AboutComponent,
    ProductaComponent,
    OffersComponent,
    FileUploadComponent,
    FileTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule,
  NgxExtendedPdfViewerModule,
  PdfViewerModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
