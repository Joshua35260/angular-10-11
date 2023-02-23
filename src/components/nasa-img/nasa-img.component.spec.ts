/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NasaImgComponent } from './nasa-img.component';

describe('NasaImgComponent', () => {
  let component: NasaImgComponent;
  let fixture: ComponentFixture<NasaImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
