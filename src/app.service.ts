import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worldss!';
  }

  getName(): string {
    return '你好色彩！';
  }
}
