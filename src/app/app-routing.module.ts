import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { GestorListComponent } from './components/gestor/gestor-list/gestor-list.component';
import { GestorCreateComponent } from './components/gestor/gestor-create/gestor-create.component';
import { GestorUpdateComponent } from './components/gestor/gestor-update/gestor-update.component';
import { GestorDeleteComponent } from './components/gestor/gestor-delete/gestor-delete.component';
import { MaquinaListComponent } from './components/maquina/maquina-list/maquina-list.component';
import { MaquinaCreateComponent } from './components/maquina/maquina-create/maquina-create.component';
import { MaquinaUpdateComponent } from './components/maquina/maquina-update/maquina-update.component';
import { MaquinaDeleteComponent } from './components/maquina/maquina-delete/maquina-delete.component';
import { DepartamentosListComponent } from './components/departamentos/departamentos-list/departamentos-list.component';
import { DepartamentosCreateComponent } from './components/departamentos/departamentos-create/departamentos-create.component';
import { DepartamentosUpdateComponent } from './components/departamentos/departamentos-update/departamentos-update.component';
import { DepartamentosDeleteComponent } from './components/departamentos/departamentos-delete/departamentos-delete.component';
import { DefeitosListComponent } from './components/defeitos/defeitos-list/defeitos-list.component';
import { DefeitosCreateComponent } from './components/defeitos/defeitos-create/defeitos-create.component';
import { DefeitosUpdateComponent } from './components/defeitos/defeitos-update/defeitos-update.component';
import { DefeitosDeleteComponent } from './components/defeitos/defeitos-delete/defeitos-delete.component';
import { OrdemCreateComponent } from './components/ordem/ordem-create/ordem-create.component';
import { OrdemListComponent } from './components/ordem/ordem-list/ordem-list.component';
import { OrdemUpdateComponent } from './components/ordem/ordem-update/ordem-update.component';
import { OrdemReadComponent } from './components/ordem/ordem-read/ordem-read.component';
import { OrdemUpdateUComponent } from './components/ordem/ordem-update-u/ordem-update-u.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent},

      { path: 'tecnicos',            component: TecnicoListComponent },
      { path: 'tecnicos/create',     component: TecnicoCreateComponent },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      { path: 'clientes', component: ClienteListComponent},
      { path: 'clientes/create', component: ClienteCreateComponent},
      { path: 'clientes/update/:id', component: ClienteUpdateComponent},
      {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

      {path: 'gestores', component: GestorListComponent},
      {path: 'gestores/create', component: GestorCreateComponent},
      {path: 'gestores/update/:id', component: GestorUpdateComponent},
      {path: 'gestores/delete/:id', component: GestorDeleteComponent},

      {path: 'ordens', component: OrdemListComponent},
      {path: 'ordens/create', component: OrdemCreateComponent},
      {path: 'ordens/update/:id', component: OrdemUpdateComponent},
      {path: 'ordens/read/:id', component: OrdemReadComponent},
      {path: 'ordens/update-u/:id', component: OrdemUpdateUComponent},

      {path: 'maquinas', component: MaquinaListComponent},
      {path: 'maquinas/create', component: MaquinaCreateComponent},
      {path: 'maquinas/update/:id', component: MaquinaUpdateComponent},
      {path: 'maquinas/delete/:id', component: MaquinaDeleteComponent},

      {path: 'departamentos', component: DepartamentosListComponent},
      {path: 'departamentos/create', component: DepartamentosCreateComponent},
      {path: 'departamentos/update/:id', component: DepartamentosUpdateComponent},
      {path: 'departamentos/delete/:id', component: DepartamentosDeleteComponent},

      {path: 'defeitos', component: DefeitosListComponent},
      {path: 'defeitos/create', component: DefeitosCreateComponent},
      {path: 'defeitos/update/:id', component: DefeitosUpdateComponent},
      {path: 'defeitos/delete/:id', component: DefeitosDeleteComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
