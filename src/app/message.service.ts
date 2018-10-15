import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  callCount = 0;

  constructor() { }

  show(prefix: string) {
    this.callCount += 1;
    return `<[${prefix}]> (called ${this.callCount})`;
  }
}
