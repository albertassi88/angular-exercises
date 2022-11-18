/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //testes

  it('testar o clique do botão', () => {
    const botao = fixture.debugElement.query(By.css('#btn-input'));
    botao.triggerEventHandler('click', null);
    fixture.detectChanges();
  });

  it('testar se a variável palavra inicia vazia', () => {
    const palavra = fixture.nativeElement.querySelector('#display-h1');
    fixture.detectChanges();
    expect(palavra.textContent).toEqual('');
  });

  it('testar se ao clicar no botão, aparece a palavra Sucesso na tela', () => {
    const palavra = fixture.nativeElement.querySelector('h1');
    const botao = fixture.debugElement.query(By.css('#btn-input'));
    botao.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(palavra.textContent).toContain('Sucesso');

  });
});

