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

  is_edit:number|null = null;

  to_do_array:string[]= [];

  saveTodoList()
  {
    if(this.is_edit != null)
    {
      this.to_do_array= this.to_do_array.map((val,i)=>{
        if(this.is_edit == i)
        {
          val = this.to_do_action;
        }

        return val;

      })
    }else{
      this.to_do_array.push(this.to_do_action);
      console.log(this.to_do_array);
    }
    
    this.to_do_action = '';
    this.is_edit =null;
  }

  edit(editItemIndex:number)
  {
      this.is_edit =editItemIndex;
      const editData = this.to_do_array.find((val,i)=>{
        return editItemIndex==i;
      })
      if(editData)
      this.to_do_action=editData;
  }

  delete(deleteIndex:number)
  {
    //this below function return all value ,which index is not match
    this.to_do_array=this.to_do_array.filter((val,i)=>{
      return deleteIndex!=i;
    })
    console.log(this.to_do_array)
  }

}
