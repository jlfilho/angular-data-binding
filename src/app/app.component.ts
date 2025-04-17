import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Data Binding Application';
  message: string = 'Olá mundo!';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  inputText: string = "";

  showAlert() {
    alert("Você clicou no botão!");
  }

}
