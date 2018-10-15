import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  providers: [MessageService],
})
export class SuccessComponent implements OnInit {
  message: string;

  constructor(messageService: MessageService) {
    this.message = messageService.show('success');
  }

  ngOnInit() {
  }

}
