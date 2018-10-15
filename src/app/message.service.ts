import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  show(prefix: string) {
    return `<[${prefix}]>`;
  }
}
