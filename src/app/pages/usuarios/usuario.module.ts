import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioPaginnacao } from './paginacao/usuario-paginacao';
import { PaginancaoModule } from 'src/app/shared/componentes/paginacao/paginancao.module';


@NgModule({
    declarations: [UsuarioComponent,UsuarioPaginnacao],
    exports: [UsuarioComponent, UsuarioPaginnacao],
    imports: [
        CommonModule, 
        HttpClientModule,
        PaginancaoModule    
    ]
    })
export class UsuarioModule{}