import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestMessageService {

  constructor() { }

  show(prefix: string) {
    return `better message: ${prefix} works!`;
  }
}
