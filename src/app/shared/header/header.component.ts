import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InicioComponent } from '../../page/inicio/inicio.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Menu Open:', this.menuOpen); // Agrega esto para depuración
  }
}
