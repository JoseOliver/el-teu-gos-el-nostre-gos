import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'TeuGosNostreGos Navbar';
  @Input() sidenav:any;
  @Input() data:any;

  constructor(protected router: Router){
  }
}
