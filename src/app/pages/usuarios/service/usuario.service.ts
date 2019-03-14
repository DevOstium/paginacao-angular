import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../domain/usuario.model';

@Injectable({ providedIn : 'root' })
export class UsuarioService{

    constructor( private http : HttpClient){ }

    findAll(){
        
        return this.http.get<Usuario[]>('http://localhost:8080/usuarios');
    }

}