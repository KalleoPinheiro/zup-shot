import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShotModule } from './components/shot/shot.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultModule } from './shared/default.module';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    DetailPageComponent
  ],
  imports: [BrowserModule, DefaultModule, ShotModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
