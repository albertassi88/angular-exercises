import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {


  livro: any = {
    titulo: 'Blablablablablablablablablablablablabla',
    descricao: 'BlablablablablaBlablablablablablablabla',
    rating: 4.54321,
    numeroPaginas: 4444,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 28),
    url: 'http://a.co/glqjpRP'
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });


}
