import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = '';
  nome: any = '';
  inscricao: any = Subscription; //assinatura


  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => { //assinatura
      this.id = params['id'];
      this.nome = this.cursoService.getCurso(Number(params['id']));
      if(this.nome == null) {
        this.router.navigate(['/nao-encontrado']); //Redirecionamento de rotas
      }
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe(); //assinatura
  }

}
