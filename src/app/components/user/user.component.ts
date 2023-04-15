import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'User',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    constructor(protected router: Router){
    }
}