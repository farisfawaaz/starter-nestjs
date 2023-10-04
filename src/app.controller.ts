import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/greetings')
export class AppController {
  // constructor(private readonly appService: AppService) { }

  @Get('/hi')
  getHello(): string {
    // return this.appService.getHello();
    return 'Hi, there!';
  }

  @Get('/bye')
  getBye(): string {
    return 'Bye, there!';
  }
}
