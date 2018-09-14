import { Component, OnInit } from '@angular/core';

import {ErrorService} from '../error.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor( public errorService: ErrorService ) { }
  ngOnInit() {
  }
}
