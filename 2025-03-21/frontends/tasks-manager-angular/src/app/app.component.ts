import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { Contact } from './interfaces/contact.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'tasks-manager-angular';
  contacts: Contact[] = []

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTacks()
        .then((response: any) => {
          this.contacts = response
        })
        .catch((error: any) => alert(error.message ?? "Error") )
  }

  onSubmit(): void  {

    // data = "Data come from form"
    const data: Contact = {
      name: "Seven",
      countryCode: "+237",
      phone: 12345678,
      email: "contact@gmail.com"
    }

    this.taskService.createOneContact(data);
  }

}
