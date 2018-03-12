import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieCompenentComponent } from './my-movie-compenent.component';

describe('MyMovieCompenentComponent', () => {
  let component: MyMovieCompenentComponent;
  let fixture: ComponentFixture<MyMovieCompenentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMovieCompenentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMovieCompenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
