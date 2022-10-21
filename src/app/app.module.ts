import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PageAComponent } from './component/page-a/page-a.component';
import { CharactersListComponent } from './component/characters-list/characters-list.component';
import { FormComponent } from './component/form/form.component';
import { AddFaveComponent } from './component/add-fave/add-fave.component';
import { FaveListComponent } from './component/fave-list/fave-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageAComponent,
    CharactersListComponent,
    FormComponent,
    AddFaveComponent,
    FaveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}