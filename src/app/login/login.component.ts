import { Component, OnInit } from '@angular/core';
import { ModerService } from '../moder.service';
import {Moder} from '../moder';
import {ErrorService} from '../error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    moder: Moder = new Moder();
  constructor(public moderService: ModerService , public errorService: ErrorService) { }
  ngOnInit() {
  }
    public login(moder) {
        this.moderService.login(moder);
    }
    public get token() {
        return this.moderService.token;
    }
}
