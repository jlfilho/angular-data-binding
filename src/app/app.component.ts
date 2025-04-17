import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Data Binding Application';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  inputText: string = "";

  showAlert() {
    alert("Você clicou no botão!");
  }

}
