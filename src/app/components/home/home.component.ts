import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeProduto: string ='Curso Angular';
  anuncio: string= `O ${this.nomeProduto} está em produção `;
  idProduto: number=123;
  precoProduto: number=2.5;
  promocao: boolean=true;

  constructor() {
    console.log('nome do produto:',this.nomeProduto);
  }

  ngOnInit(): void {
  }

}
