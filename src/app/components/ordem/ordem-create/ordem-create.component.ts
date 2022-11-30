import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Defeitos } from 'src/app/models/defeitos';
import { Maquina } from 'src/app/models/maquina';
import { Ordem } from 'src/app/models/ordem';
import { ClienteService } from 'src/app/services/cliente.service';
import { DefeitoService } from 'src/app/services/defeitos.service';
import { MaquinaService } from 'src/app/services/maquina.service';
import { OrdemService } from 'src/app/services/ordem.service';

@Component({
  selector: 'app-ordem-create',
  templateUrl: './ordem-create.component.html',
  styleUrls: ['./ordem-create.component.css']
})
export class OrdemCreateComponent implements OnInit {

  ordem: Ordem = {
    prioridade:  '3',
    status:      '0',
    tipoManutencao: 'DEFINA',
    categoriaManutencao: 'DEFINA',
    defeitos:      '',
    observacoes: '',
    obsTec:      '',
    tecnico:     1,
    cliente:     '',
    gestor:      11,
    maquina:     '', 
    nomeCliente: '',
    nomeTecnico: '',
    nomeGestor: '',
    nomeMaquina: '',
    nomeDefeitos: '',
    parada:       '',
    horaParada:   ''
  }

  clientes: Cliente[] = []
  maquinas: Maquina[] = []
  defeitoso: Defeitos[] = []

  defeitos:     FormControl = new FormControl(null, [Validators.required]);
  observacoes:FormControl = new FormControl(null, [Validators.required]);
  cliente:    FormControl = new FormControl(null, [Validators.required]);
  maquina:   FormControl = new FormControl(null, [Validators.required]);
  horaParada: FormControl = new FormControl(null, [Validators.required]);
  parada: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private ordemService: OrdemService,
    private clienteService: ClienteService,
    private maquinaService: MaquinaService,
    private defeitoService: DefeitoService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllDefeitos();
    this.findAllMaquina();
  }

  create(): void {
    this.ordemService.create(this.ordem).subscribe(resposta => {
      this.toastService.success('Ordem de Manutenção criado com sucesso', 'Nova OM');
      this.router.navigate(['ordens']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  findAllMaquina(): void {
    this.maquinaService.findAll().subscribe(resposta => {
      this.maquinas = resposta;
    })
  }

  findAllDefeitos(): void {
    this.defeitoService.findAll().subscribe(resposta => {
      this.defeitoso = resposta;
    })
  }

  validaCampos(): boolean {
    return this.defeitos.valid 
       && this.observacoes.valid && this.cliente.valid 
       && this.maquina.valid}
}