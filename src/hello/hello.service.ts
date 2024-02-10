import { Get, Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  private readonly context : string = "Hello first blood !"
  sayHello() : string {
    return this.context
  }
}
