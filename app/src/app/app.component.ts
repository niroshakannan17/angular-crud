import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  to_do_action = '';

  to_do_array:string[]= [];

  saveTodoList()
  {
    this.to_do_array.push(this.to_do_action);
    console.log(this.to_do_array);
    this.to_do_action = '';
  }

}
