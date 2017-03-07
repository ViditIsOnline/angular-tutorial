import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Forms';
  submenu = [{
    name: 'Template Driven Forms',
    path: 'template'
  }, {
    name: 'Reactive Forms',
    path: 'reactive'
  }, {
    name: 'Form Validators',
    path: 'valid'
  }, {
    name: 'Custom Validators',
    path: 'cust-valid'
  }];
  constructor() { }

  ngOnInit() {
  }

}
