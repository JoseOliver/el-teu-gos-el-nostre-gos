import { Component, Input } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'TeuGosNostreGos Navbar';
  @Input() sidenav:any;
}
