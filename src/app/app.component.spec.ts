import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule ,DebugElement} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {RadioButtonModule} from 'primeng/radiobutton';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [
      //   AppComponent,
      // ],
      // imports:[
      //   FormsModule,RadioButtonModule,ConfirmDialogModule
      // ]
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InputTextModule,
        FormsModule,
        RadioButtonModule,
        ConfirmDialogModule,
        KeyFilterModule,
        MessagesModule,
        MessageModule
      ],
      providers: [ConfirmationService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'primeng form'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('primeng form');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));

  it('should get inner html from h1 tag of form', async(() => {
    
     fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    //fixture.detectChanges();
    //de = fixture.debugElement.query(By.css('form'));

    fixture.detectChanges();
    spyOn(component,'confirm');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.confirm).toHaveBeenCalledTimes(0);
  }));
 
});