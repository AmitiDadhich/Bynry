import { Component, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() profile: any;

  constructor(private mapComponent: MapComponent, private profileService: ProfileService) { }

  showOnMap(): void {
    this.mapComponent.initMap();
    this.mapComponent.addMarker(this.profile.address.lat, this.profile.address.lng);
  }
}
