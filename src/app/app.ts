import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';

@Component({
  imports: [RouterOutlet, Inicio],  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('practica-despliegues');
}
