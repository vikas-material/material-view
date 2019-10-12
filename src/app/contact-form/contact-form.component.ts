import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMethod = [
    { id:1 ,name:'E-mail'},
    { id:2 ,name:'Phone'},
    { id:3 ,name:'Address'}
  ]

  onlog(firstName)
  {
    console.log(firstName);
  }
  submit(f)
  {
    console.log(f);
  }
}
