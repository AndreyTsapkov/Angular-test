import { Component } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `
    <label>Введите имя:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Добро пожаловать {{ name }}!</h1>
    <p>Angular 15 представляет модульную архитектуру приложения</p>
  `,
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  name = '';
}
