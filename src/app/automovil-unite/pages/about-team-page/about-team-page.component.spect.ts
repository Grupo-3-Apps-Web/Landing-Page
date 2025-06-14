import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamPageComponent } from './about-team-page.component';

describe('AboutTeamPageComponent', () => {
  let component: AboutTeamPageComponent;
  let fixture: ComponentFixture<AboutTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTeamPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
