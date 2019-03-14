import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../domain/usuario.model';


@Component({
        templateUrl : './usuario.component.html'
})
export class UsuarioComponent implements OnInit{
    
    usuarios : Usuario[] = [];
    
    constructor(private service : UsuarioService){}
    
    ngOnInit(): void {
        this.load();
    }

    load(){
        this.service.findAll()
                .subscribe( response => {
                    //console.log(response); 
                    console.log("Usuario Antes", this.usuarios);
                    this.usuarios = response;
                    console.log("Usuario", this.usuarios);
                }
    );

    }


}