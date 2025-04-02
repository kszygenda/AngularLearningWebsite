import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesViewComponent } from './repositories-view.component';

describe('RepositoriesViewComponent', () => {
  let component: RepositoriesViewComponent;
  let fixture: ComponentFixture<RepositoriesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
