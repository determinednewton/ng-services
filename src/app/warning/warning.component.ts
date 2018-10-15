import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  message: string;

  constructor(messageService: MessageService) {
    this.message = messageService.show('warning');
  }

  ngOnInit() {
  }

}
