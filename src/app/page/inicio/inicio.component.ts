import { Component } from '@angular/core';
import { FritosComponent } from '../fritos/fritos.component';
import { WhatsappComponent } from '../../../../components/whatsapp/whatsapp.component';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [WhatsappComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
