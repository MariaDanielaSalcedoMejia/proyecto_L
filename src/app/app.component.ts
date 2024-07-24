// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component'; // Asegúrate de usar la ruta correcta
import { FooterComponent } from './shared/footer/footer.component'; // Asegúrate de usar la ruta correcta
import { FritosComponent } from './page/fritos/fritos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FritosComponent],
})
export class AppComponent {}
