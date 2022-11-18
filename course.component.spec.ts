import { CourseComponent } from './course.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { ComponentsModule } from '../components.module';

describe('CoursesCardListComponent', () => {
    const mockCursos = [{id: 0, titles: 'A'}, {id: 1, titles: 'B'}]; //cópia dos dados recebidos na requisição

    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>; //criar um acessório do componente, que é tipo de utilitário de teste que nos ajuda a fazer algumas operações de teste comuns.
    let el: DebugElement;

    beforeEach(waitForAsync(() => { //usar o async ou waitForAsync quando for requisições assincronas.
        TestBed.configureTestingModule({
            imports: [ComponentsModule] //declarar o módulo, ao invés do componente, pois no módulo já contem todos os components.
        })
        .compileComponents() //serve para não fazer requisições, apenas compilar o teste.
        .then(() => {
            fixture = TestBed.createComponent(CourseComponent); //criando o componente com o fixture.
            component = fixture.componentInstance; //agora podemos usar o fixture para pegar uma instância do próprio componente.
            el = fixture.debugElement; //para pegar o elemento do html.
        });
    }));


    it('teste para criar um componente', () => {
        expect(component).toBeTruthy(); //testar se o componente foi instânciado corretamente.
    });


    it('teste para exibir a lista de cursos', () => {
        component.courses = mockCursos; //inserindo o mock de cursos na variável courses (do componente) que exibe a lista na tela do usuário.
        fixture.detectChanges(); //depois de atribuir dados a um componente, precisamos notificar o componente sobre essa alteração.
        const cards = el.queryAll(By.css(".course-card")); //pegando a tag da classe 'course-card' para ter acesso aos elementos dessa classe.
        expect(cards).toBeTruthy("Could not find cards"); //verifica se é verdadeiro, caso não seja vai emitir a mensagem de erro 'Could not find cards'.
        expect(cards.length).toBe(12, "Unexpected number of courses"); //verificar a quantidade de cursos na lista.
        //console.log(el.nativeElement.outerHTML); //para acessar o elemento DOM nativo do componente, para visualizar tem que inspensionar o elemento e visualizar no console.
    });


    it('teste para exibir o primeiro curso', () => {
        component.courses = mockCursos; //inserindo o mock de cursos na variável courses (do componente) que exibe a lista na tela do usuário.
        fixture.detectChanges(); //depois de atribuir dados a um componente, precisamos notificar o componente sobre essa alteração.
        const course = component.courses[0];
        const card = el.query(By.css(".course-card:first-child")),
              title = card.query(By.css("mat-card-title")),
              image = card.query(By.css("img"));
        expect(card).toBeTruthy("Could not find course card");
        expect(title.nativeElement.textContent).toBe(course.titles.description);
        expect(image.nativeElement.src).toBe(course.iconUrl);
    });

});


