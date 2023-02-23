import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-nasa-img',
  templateUrl: './nasa-img.component.html',
  styleUrls: ['./nasa-img.component.css']
})
export class NasaImgComponent implements OnInit {
  imageUrl: string = '';
  imgOfTheDay: string = this.imageUrl;
  
  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(url => {
      this.imageUrl = url;
    });
  }
}
