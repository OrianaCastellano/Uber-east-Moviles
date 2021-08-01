import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisfavoritosUsuarioPage } from './misfavoritos-usuario.page';

describe('MisfavoritosUsuarioPage', () => {
  let component: MisfavoritosUsuarioPage;
  let fixture: ComponentFixture<MisfavoritosUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisfavoritosUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisfavoritosUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
