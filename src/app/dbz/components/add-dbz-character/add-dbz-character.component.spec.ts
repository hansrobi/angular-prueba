import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDbzCharacterComponent } from '../list/add-dbz-character.component';

describe('AddDbzCharacterComponent', () => {
  let component: AddDbzCharacterComponent;
  let fixture: ComponentFixture<AddDbzCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDbzCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDbzCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
