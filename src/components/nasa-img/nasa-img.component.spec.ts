import { TestBed, async } from '@angular/core/testing';
import { NasaImgComponent } from './nasa-img.component';
import { NasaService } from '../../services/nasa.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

describe('NasaImgComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserModule],
      declarations: [NasaImgComponent],
      providers: [NasaService],
    }).compileComponents();
  }));

  fit('should create the component', () => {
    const fixture = TestBed.createComponent(NasaImgComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  fit('should have a public property named "imgOfTheDay"', () => {
    const fixture = TestBed.createComponent(NasaImgComponent);
    const component = fixture.componentInstance;
    expect(component.imgOfTheDay).toBeDefined();
  });

  fit('should display the image of the day returned by the service', async(() => {
    const fixture = TestBed.createComponent(NasaImgComponent);
    const component = fixture.componentInstance;
    const nasaService = TestBed.get(NasaService);
    const mockImage = 'https://apod.nasa.gov/apod/image/2102/LOmbradellaTerraFinazzi1024.jpg';
    spyOn(nasaService, 'getImageOfTheDay').and.returnValue(of(mockImage));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
      expect(imgElement).toBeTruthy();
      expect(imgElement.src).toContain(mockImage);
    });
  }));
});
