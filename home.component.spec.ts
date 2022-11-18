import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';
import {DebugElement} from '@angular/core';
import {HomeComponent} from './home.component';
import {CoursesService} from '../services/courses.service';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {click} from './click';

describe('HomeComponent', () => {
  const mockCursos: any = [{id: 0, titles: 'A', category: 'BEGINNER'}, {id: 1, titles: 'B', category: 'ADVANCED'}]; //cópia dos dados recebidos na requisição
  let fixture: ComponentFixture<HomeComponent>; //criar um acessório do componente, que é tipo de utilitário de teste que nos ajuda a fazer algumas operações de teste comuns.
  let component:HomeComponent;
  let el: DebugElement;
  let coursesService: any;
  const beginnerCourses = mockCursos().filter((course: any) => course.category == 'BEGINNER');
  const advancedCourses = mockCursos().filter((course: any) => course.category == 'ADVANCED');

  beforeEach(waitForAsync(() => {
      const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses']) //findAllCourses é a mesma função que estamos usando no componante.

      TestBed.configureTestingModule({
          imports: [
              ComponentsModule,
              NoopAnimationsModule //caso o componente tenha algum tipo de animação, é necesário importar esse módulo.
          ],
          providers: [
              {provide: CoursesService, useValue: coursesServiceSpy}  //injetar o service que esta no componente, dessa forma.
          ]
      }).compileComponents()
          .then(() => {
              fixture = TestBed.createComponent(HomeComponent);
              component = fixture.componentInstance;
              el = fixture.debugElement;
              coursesService = TestBed.get(CoursesService);
          });
  }));


  it("testar se o componente foi criado", () => {
    expect(component).toBeTruthy();
  });


  it("testar se foi exibido apenas cursos para iniciantes", () => {
      coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
      fixture.detectChanges();
      const tabs = el.queryAll(By.css(".mat-tab-label"));
      expect(tabs.length).toBe(1, "Unexpected number of tabs found");
  });


  it("testar se é exibido apenas os cursos avançados", () => {
      coursesService.findAllCourses.and.returnValue(of(advancedCourses)); //chamar o metódo 'findAllCourses' e pegar os valores de retorno.
      fixture.detectChanges();  //detecta as mudanças feita no método findAllCourses
      const tabs = el.queryAll(By.css(".mat-tab-label")); //pega a tag da classe mat-tab-label
      expect(tabs.length).toBe(1, "Unexpected number of tabs found"); //verifica se tem apenas 1 elemento
  });


  it("testar se é exibido ambas as guias", () => {
      coursesService.findAllCourses.and.returnValue(of(mockCursos()));
      fixture.detectChanges();
      const tabs = el.queryAll(By.css(".mat-tab-label"));
      expect(tabs.length).toBe(2, "Expected to find 2 tabs");
  });


  it("testar se é exibido cursos avançados quando a guia é clicada", fakeAsync(() => {  //fakeAsync é um argumento que indica que o teste é assíncrono.
      coursesService.findAllCourses.and.returnValue(of(mockCursos()));
      fixture.detectChanges();
      const tabs = el.queryAll(By.css(".mat-tab-label"));
      click(tabs[1]); //clicar no botão.
      fixture.detectChanges();
      flush(); //serve para garantir que todas as operações assíncronas sejam concluídas. (exemplo: o click de uma aba para outra aba)
      const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
      expect(cardTitles.length).toBeGreaterThan(0,"Could not find card titles"); //verificar se a lista não esta vazia (se ela é maior que 0).
      expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course"); //verificar se o texto está na tela do usuário.

      //tick(500);

      // flushMicrotasks();
    }));


    it("testar se é exibido cursos avançados quando a guia é clicada - assíncrona", waitForAsync(() => {

        coursesService.findAllCourses.and.returnValue(of(mockCursos()));
        fixture.detectChanges();
        const tabs = el.queryAll(By.css(".mat-tab-label"));
        click(tabs[1]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
            expect(cardTitles.length).toBeGreaterThan(0,"Could not find card titles");
            expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");

        });
    }));


});
