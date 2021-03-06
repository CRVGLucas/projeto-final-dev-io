import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaRoutingModule } from './conta.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContaAppComponent } from './conta.app.component';
import { ContaService } from './services/conta.service';
import { CustomFormsModule } from 'ngx-custom-validators';



@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContaRoutingModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
