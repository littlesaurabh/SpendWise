import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranPage } from './tran.page';

describe('TranPage', () => {
  let component: TranPage;
  let fixture: ComponentFixture<TranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
