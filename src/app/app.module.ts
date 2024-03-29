import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

//Componentes do projeto
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { GestorListComponent } from './components/gestor/gestor-list/gestor-list.component';
import { GestorCreateComponent } from './components/gestor/gestor-create/gestor-create.component';
import { GestorUpdateComponent } from './components/gestor/gestor-update/gestor-update.component';
import { GestorDeleteComponent } from './components/gestor/gestor-delete/gestor-delete.component';
import { MaquinaCreateComponent } from './components/maquina/maquina-create/maquina-create.component';
import { MaquinaUpdateComponent } from './components/maquina/maquina-update/maquina-update.component';
import { MaquinaDeleteComponent } from './components/maquina/maquina-delete/maquina-delete.component';
import { MaquinaListComponent } from './components/maquina/maquina-list/maquina-list.component';
import { DepartamentosCreateComponent } from './components/departamentos/departamentos-create/departamentos-create.component';
import { DepartamentosListComponent } from './components/departamentos/departamentos-list/departamentos-list.component';
import { DepartamentosUpdateComponent } from './components/departamentos/departamentos-update/departamentos-update.component';
import { DepartamentosDeleteComponent } from './components/departamentos/departamentos-delete/departamentos-delete.component';
import { DefeitosCreateComponent } from './components/defeitos/defeitos-create/defeitos-create.component';
import { DefeitosListComponent } from './components/defeitos/defeitos-list/defeitos-list.component';
import { DefeitosUpdateComponent } from './components/defeitos/defeitos-update/defeitos-update.component';
import { DefeitosDeleteComponent } from './components/defeitos/defeitos-delete/defeitos-delete.component';
import { CommonModule } from '@angular/common';
import { OrdemCreateComponent } from './components/ordem/ordem-create/ordem-create.component';
import { OrdemListComponent } from './components/ordem/ordem-list/ordem-list.component';
import { OrdemReadComponent } from './components/ordem/ordem-read/ordem-read.component';
import { OrdemUpdateComponent } from './components/ordem/ordem-update/ordem-update.component';
import { OrdemUpdateUComponent } from './components/ordem/ordem-update-u/ordem-update-u.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TecnicoListComponent,
    LoginComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    GestorListComponent,
    GestorCreateComponent,
    GestorUpdateComponent,
    GestorDeleteComponent,
    MaquinaCreateComponent,
    MaquinaUpdateComponent,
    MaquinaDeleteComponent,
    MaquinaListComponent,
    DepartamentosCreateComponent,
    DepartamentosListComponent,
    DepartamentosUpdateComponent,
    DepartamentosDeleteComponent,
    DefeitosCreateComponent,
    DefeitosListComponent,
    DefeitosUpdateComponent,
    DefeitosDeleteComponent,
    OrdemCreateComponent,
    OrdemListComponent,
    OrdemReadComponent,
    OrdemUpdateComponent,
    OrdemUpdateUComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
