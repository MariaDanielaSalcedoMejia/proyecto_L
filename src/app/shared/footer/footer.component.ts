import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InicioComponent } from '../../page/inicio/inicio.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
