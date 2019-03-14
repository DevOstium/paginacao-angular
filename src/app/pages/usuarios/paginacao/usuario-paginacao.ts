import { Component, OnInit, SimpleChanges, OnChanges, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Usuario } from '../domain/usuario.model';
import { UsuarioService } from '../service/usuario.service';


@Component({

        templateUrl : './usuario-paginacao.html'

})

export class UsuarioPaginnacao implements OnInit, OnDestroy, AfterViewInit {
	
	data = new Date(2016, 6, 21, 16, 53, 54);

	pagina: number = 0;
	qtdPorPagina: number = 5;
	
	alunos: any;
	alunosTotal = [	];
	
	totalRegistros : number =23;
	
	//usuarios : Usuario[] = [];
	
	constructor(private service : UsuarioService) {
	}
	
	ngOnInit(): void {
	}
	
	ngAfterViewInit(): void {
		this.load();
		this.totalRegistros
		console.log("AfterViewInit", this.totalRegistros)
	}

	load(){
        this.service.findAll()
                .subscribe( response => {
					this.alunosTotal = response;
					//console.log("this.alunosTotal ", this.alunosTotal);
					this.popularAlunos();
					this.totalRegistros = this.alunosTotal.length;
					console.log("FindAll this.totalRegistro" , this.totalRegistros)
					
                }
				);
			}
			
			ngOnDestroy(): void {
				throw new Error("Method not implemented.");
			}
			
			
			paginar($event: any) {
				this.pagina = $event - 1;
				this.popularAlunos();
			}
			
			popularAlunos() {
		this.alunos = [];

		for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
			if (i >= this.alunosTotal.length) {
				break;
			}
			
			this.alunos.push(this.alunosTotal[i]);
			///console.log("Alunos " , this.alunos)
			
		}
	}
}
