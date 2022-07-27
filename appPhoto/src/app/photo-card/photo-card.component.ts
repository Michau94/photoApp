import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css'],
})
export class PhotoCardComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  photoUrl = '';

  ngOnInit(): void {
    this.onGetPhoto();
  }

  onGetPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      this.photoUrl = res;
    });
  }
}
