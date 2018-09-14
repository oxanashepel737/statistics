import { Component, OnInit } from '@angular/core';

import {MessageService} from '../message.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor( public errorService: MessageService ) { }
  ngOnInit() {
  }
}
