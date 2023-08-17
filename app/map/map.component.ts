import { Component, OnInit } from '@angular/core';

declare const google: any; // Declare the 'google' object

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2
    });
  }

  addMarker(lat: number, lng: number): void {
    new google.maps.Marker({
      position: { lat, lng },
      map: this.map
    });
  }
}
