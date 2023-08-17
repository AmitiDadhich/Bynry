import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MapComponent } from './map/map.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
