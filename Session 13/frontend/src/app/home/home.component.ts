import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  galleries: Gallery[] = [];
  constructor(private router: Router, private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleries = this.galleryService.getGalleries();
  }

  goToGallery(id: number) {
    this.router.navigate(['gallery', id]);
  }
}
