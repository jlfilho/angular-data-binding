## 📘 **Aplicação Angular: Exemplos de Data Binding**

### 🔧 Tecnologias:
- Angular 15+
- TypeScript

---

### 🎯 **Tipos de Data Binding abordados:**
1. **Interpolation (`{{ }}`)**
2. **Property Binding (`[property]`)**
3. **Event Binding (`(event)`)**
4. **Two-way Binding (`[(ngModel)]`)**

---

### 📁 Estrutura básica do projeto:
```
data-binding-app/
├── src/
│   └── app/
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.css
```

---

### 🧩 Passo a passo

#### 1️⃣ Criar o projeto
```bash
ng new data-binding-app
cd data-binding-app
ng serve
```

---

#### 2️⃣ Atualizar o  `app.component.ts`

No `app.component.ts`, importe o `FormsModule`:

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Data Binding Application';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  inputText: string = '';

  showAlert() {
    alert('Você clicou no botão!');
  }
}
```

---

#### 3️⃣ Conteúdo do `app.component.html`:

```html
<!-- Interpolação -->
<h1>{{ title }}</h1>

<div class="container">

  <!-- Property Binding -->
  <img [src]="imageUrl" alt="Logomarca do Angular" width="100" height="100">

  <!-- Event Binding -->
  <button (click)="showAlert()">Clique aqui</button>

  <br>

  <!-- Two-way Binding -->
  <label for="fname">Digite um texto:</label>
  <input [(ngModel)]="inputText" type="text" id="fname" name="fname"><br><br>

  <p>Você digitou: {{ inputText }}</p>
</div>

<router-outlet></router-outlet>
```

---

#### 4️⃣ Conteúdo do `app.component.scss`:

```scss
h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #ecf0f1;
}
```

---

#### 5️⃣ Publicar no GitHub Pages:

```bash
ng add angular-cli-ghpages

ng deploy <nome-projeto> --base-href=/<nome-repositorio>/
```

Substitua `<nome-projeto>` e `<nome-repositorio>` pelos nomes reais utilizados no seu projeto/repositório.

---

### ✅ Resultado esperado:
- O título é exibido via **interpolação**.
- A imagem aparece via **property binding**.
- O botão aciona um **event binding** com `click`.
- O campo de texto atualiza dinamicamente o parágrafo com **two-way binding**.

