import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-props-modal',
  templateUrl: './props-modal.component.html',
  styleUrls: ['./props-modal.component.css']
})
export class PropsModalComponent implements OnInit {
    @Input() message: string;
    @Input() open: boolean;
  constructor() { }

  ngOnInit() {
  }

}
