import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
listaProdutos: any[]=[
  {id: 1, nome: 'curso angular',validade: '2022-11-15',preco: 50},
  {id: 2, nome: 'curso ionic',validade: '2022-12-25',preco: 140.30}
];
  constructor() {

   }

  ngOnInit(): void {
  }

}
