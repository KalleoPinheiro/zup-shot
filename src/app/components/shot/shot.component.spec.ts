import { MaterialModule } from './../../shared/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShotService } from './../../services/shot.service';
import { ShotComponent } from './shot.component';
describe('ShotComponent', () => {
  let component: ShotComponent;
  let fixture: ComponentFixture<ShotComponent>;
  beforeEach(() => {
    const formBuilderStub = { group: object1 => ({}) };
    const shotServiceStub = { list: () => ({ subscribe: () => ({}) }) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MaterialModule],
      declarations: [ShotComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: ShotService, useValue: shotServiceStub }
      ]
    });
    spyOn(ShotComponent.prototype, 'buildForm');
    spyOn(ShotComponent.prototype, 'filterShots');
    fixture = TestBed.createComponent(ShotComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('shots defaults to: []', () => {
    expect(component.shots).toEqual([]);
  });
  it('sizeImage defaults to: false', () => {
    expect(component.sizeImage).toEqual(false);
  });
  it('resetShot defaults to: []', () => {
    expect(component.resetShot).toEqual([]);
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(ShotComponent.prototype.buildForm).toHaveBeenCalled();
      expect(ShotComponent.prototype.filterShots).toHaveBeenCalled();
    });
  });
  describe('buildForm', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      (component.buildForm as jasmine.Spy).and.callThrough();
      component.buildForm();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
