import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GrowlModule} from 'primeng/growl';
//import {MessageService} from 'primeng/components/common/messageservice';
import { CarouselComponent } from './carousel.component';
import {CarouselModule} from 'primeng/carousel';
describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports:[
        GrowlModule,
        CarouselModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  
});
